import React, { useState, useEffect } from "react";
import "./AdminPanel.css"; // Add custom styles

export default function AdminPanel() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/admin/messages", {
            headers: {
                Authorization: "Basic " + btoa("admin:adminpassword") // Replace with secure credentials
            }
        })
            .then((res) => res.json())
            .then((data) => setMessages(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="admin-panel">
            <h2>Admin Panel</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {messages.map((msg) => (
                        <tr key={msg.id}>
                            <td>{msg.name}</td>
                            <td>{msg.email}</td>
                            <td>{msg.subject}</td>
                            <td>{msg.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
