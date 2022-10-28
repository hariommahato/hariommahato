const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
    about:{type:String}
})

module.exports = mongoose.model('About', AboutSchema);

