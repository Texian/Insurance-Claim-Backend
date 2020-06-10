const mongoose = require('mongoose');
const Floorplan = require('./Floorplan');

const RoomSchema = new mongoose.Schema({
    name: String,
    floorplan: [{type: mongoose.Schema.Types.ObjectId, ref:'Floorplan'}],
    //items: [{type: mongoose.Schema.Types.ObjectId,ref:'Item'}]
});

const Room = mongoose.model('Room', RoomSchema);

module.exports = Room;