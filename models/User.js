const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String, //TODO - create image uploads, reference the image in the database; object id?
    password: String,
    //claim: [ {type: mongoose.Schema.Types.ObjectId, ref:'Claim'}]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;