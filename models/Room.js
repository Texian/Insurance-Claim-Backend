const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    name: {required: String},
    size: {required: Number, required: Number},
    items: [Object], //TODO - reference the specific Item to which it's attached; object id?
    floorplan: Object //TODO - reference the specific Floorplan to which it's attached; object id?
});

const Room = mongoose.model('Room', RoomSchema);

module.exports = Room;