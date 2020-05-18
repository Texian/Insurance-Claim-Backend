const mongoose = require('mongoose');

const FloorplanSchema = new mongoose.Schema({
    name: { required: String },
    claim: {type: mongoose.Schema.Types.ObjectId, ref:'Claim'},
    room: [
        {type: mongoose.Schema.Types.ObjectId, ref:'Room'}
    ]
});

const Floorplan = mongoose.model('Floorplan', FloorplanSchema);

module.exports = Floorplan;