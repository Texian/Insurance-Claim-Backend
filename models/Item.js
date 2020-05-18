const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {required: String},
    value: {required: Number},
    room: {type: mongoose.Schema.Types.ObjectId, ref:'Room'},
    image: String, //TODO - create image uploads, reference the image in the database; object id?
    description: {required: String},
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;