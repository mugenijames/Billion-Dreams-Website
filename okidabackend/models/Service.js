const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }, // URL of the service image
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
