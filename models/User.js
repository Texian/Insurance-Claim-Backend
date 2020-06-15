const mongoose = require('mongoose')
    ,Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String, //TODO - create image uploads, reference the image in the database; object id?
    password: String,
    claim: [{
        name: String,
        floorplan: [{
            name: String,
            room: [{
                name: String,
                items: [{
                    name: String,
                    value: Number,
                    image: String, //TODO - create image uploads, reference the image in the database; object id?
                    description: String,
                }]
            }]
        }]
    }]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;