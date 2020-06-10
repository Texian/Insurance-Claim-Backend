const mongoose = require('mongoose');
const Room = require('./Room');

const ItemSchema = new mongoose.Schema({
    name: String,
    value: Number,
    room: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref:'Room'}],
    image: String, //TODO - create image uploads, reference the image in the database; object id?
    description: String,
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;