const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { required: String },
    email: { required: Number },
    avatar: String, //TODO - create image uploads, reference the image in the database; object id?
    password: { required: String },
    claim: [Object] //TODO - reference the specific Claims to which it's attached; object id?
});

const User = mongoose.model('User', UserSchema);

module.exports = User;