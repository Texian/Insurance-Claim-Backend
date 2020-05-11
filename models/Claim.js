const mongoose = require('mongoose');

const ClaimSchema = new mongoose.Schema({
    name: { required: String },
    user: Object, //TODO - connect to user; object id?
    floorplan: [Object] //TODO - reference the specific Floorplans to which it's attached; object id?
});

const Claim = mongoose.model('Claim', ClaimSchema);

module.exports = Claim;