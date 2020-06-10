const mongoose = require('mongoose');
const Claim = require('./Claim');

const FloorplanSchema = new mongoose.Schema({
    name: String,
    claim: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref:'Claim'}],
    //room: [{type: mongoose.Schema.Types.ObjectId, ref:'Room'}]
});

const Floorplan = mongoose.model('Floorplan', FloorplanSchema);

module.exports = Floorplan;