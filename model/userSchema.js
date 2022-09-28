const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    }
},
    {
        collection: 'userSchema',
        versionKey: false
    }
);


module.exports = mongoose.model('userSchema', userSchema)