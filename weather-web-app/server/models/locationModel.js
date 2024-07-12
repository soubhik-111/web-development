const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    weatherData: {
        type: Object,
        default: {}
    }
});

module.exports = mongoose.model('Location', LocationSchema);
