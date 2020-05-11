const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {required: String},
    value: {required: Number},
    image: String, //TODO - create image uploads, reference the image in the database; object id?
    description: {required: String},
    room: Object //TODO - reference the specific Room to which it's attached; object id?
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;