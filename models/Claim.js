const mongoose = require('mongoose');
const User = require('./User');

const ClaimSchema = new mongoose.Schema({
    name: String,
    user: [{type: mongoose.Schema.Types.ObjectId, ref:'User'}],
    //floorplan: [{type: mongoose.Schema.Types.ObjectId, ref:'Floorplan'}]
});

const Claim = mongoose.model('Claim', ClaimSchema);

module.exports = Claim;