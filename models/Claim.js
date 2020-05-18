const mongoose = require('mongoose');

const ClaimSchema = new mongoose.Schema({
    name: { required: String },
    user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    floorplan: [
        {type: mongoose.Schema.Types.ObjectId, ref:'Floorplan'}
    ]
});

const Claim = mongoose.model('Claim', ClaimSchema);

module.exports = Claim;