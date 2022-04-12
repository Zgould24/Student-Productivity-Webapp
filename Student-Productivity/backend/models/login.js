const mongoose = require('mongoose');

// Blueprint of the Schema
const accountSchema = mongoose.Schema({
    firstname: { type: String, default: null },
    lastname: { type: String, default: null },
    email: { type: String, default: null },
    username: { type: String, required: true },
    password: { type: String, required: true }
});

// Exports the blueprint for the MongoDB to use
module.exports = mongoose.model('Account', accountSchema);