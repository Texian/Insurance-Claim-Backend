const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    name: {required: String},
    floorplan: {type: mongoose.Schema.Types.ObjectId, ref:'Floorplan'},
    size: {required: Number, required: Number},
    items: [
        {type: mongoose.Schema.Types.ObjectId, ref:'Item'}
    ]
});

const Room = mongoose.model('Room', RoomSchema);

module.exports = Room;