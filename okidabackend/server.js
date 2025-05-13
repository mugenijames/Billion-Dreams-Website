const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');
const basicAuth = require('express-basic-auth');
require('dotenv').config();

const app = express();

// Database connection
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'okidabuilders'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.message);
        process.exit(1);
    } else {
        console.log('Connected to MySQL database');
    }
});

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'your_email@gmail.com',
        pass: process.env.EMAIL_PASSWORD || 'your_email_password'
    },
    pool: true
});

app.get('/', (req, res) => {
    res.send('Welcome to the Okida Builders API!');
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Submit message
app.post('/api/messages', (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const sql = 'INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, email, subject, message], (err) => {
        if (err) {
            console.error('Error saving message:', err.message);
            return res.status(500).json({ message: 'Error saving message' });
        }

        // Send email notification
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.OWNER_EMAIL || 'owner_email@gmail.com',
            subject: `New Message from ${name}`,
            text: `Subject: ${subject}\n\nMessage:\n${message}`
        };

        transporter.sendMail(mailOptions, (error) => {
            if (error) {
                console.error('Error sending email:', error.message);
            } else {
                console.log('Email sent successfully');
            }
        });

        res.json({ message: 'Message received' });
    });
});

// Admin panel with basic auth
app.use('/admin', basicAuth({
    users: { [process.env.ADMIN_USER || 'admin']: process.env.ADMIN_PASSWORD || 'adminpassword' },
    challenge: true
}));

// Fetch messages for admin
app.get('/admin/messages', (req, res) => {
    const sql = 'SELECT * FROM messages ORDER BY created_at DESC';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching messages:', err.message);
            return res.status(500).json({ message: 'Error fetching messages' });
        }
        res.json(results);
    });
});

app.post('/admin/projects', (req, res) => {
    const { title, description, image_url } = req.body;
    const sql = 'INSERT INTO projects (title, description, image_url) VALUES (?, ?, ?)';
    db.query(sql, [title, description, image_url], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error adding project' });
        }
        res.json({ message: 'Project added successfully' });
    });
});

app.get('/projects', (req, res) => {
    const sql = 'SELECT * FROM projects ORDER BY created_at DESC';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching projects' });
        }
        res.json(results);
    });
});

app.put('/admin/projects/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, image_url } = req.body;
    const sql = 'UPDATE projects SET title = ?, description = ?, image_url = ? WHERE id = ?';
    db.query(sql, [title, description, image_url, id], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error updating project' });
        }
        res.json({ message: 'Project updated successfully' });
    });
});


// Delete a project
app.delete('/admin/projects/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM projects WHERE id = ?';
    db.query(sql, [id], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error deleting project' });
        }
        res.json({ message: 'Project deleted successfully' });
    });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
