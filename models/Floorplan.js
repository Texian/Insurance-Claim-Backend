const mongoose = require('mongoose');

const FloorplanSchema = new mongoose.Schema({
    name: { required: String },
    room: [Object], //TODO - create map API, reference the map in the database; object id?
    claim: Object, //TODO - connect to parent object; object id?
});

const Floorplan = mongoose.model('Floorplan', FloorplanSchema);

module.exports = Floorplan;