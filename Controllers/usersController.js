const db = require('../Models');

const index = async (req, res) => {
    try {
        const users = await db.User.find({});
        if (!users) return res.status(404).json(`Error: No users found`);
        return res.json(users);
    } catch (err) {
        return res.status(500).json(`User Index Error: ${err}`);
    }
}

const show = async (req, res) => {
    try {
        const user = await db.User.findOne({_id: req.params.id});
        if (!user) return res.status(404).json(`Error: No user found`);
        return res.json(user);
    } catch (err) {
        return res.status(500).json(`User Find Error: ${err}`);
    }
}

const create = async (req, res) => {
    try {
        const newUser = await db.User.create(req.body);
        if (!newUser) return res.status(404).json(`Error: Could not create new user`);
        return res.json(newUser);
    } catch (err) {
        return res.status(500).json(`User Create Error: ${err}`);
    }
}

const update = async (req ,res) => {
    try {
        let userToUpdate = await db.User.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true});
        if (!userToUpdate) return res.status(404).json(`Error: Could not update user`);
        return res.json(userToUpdate);
    } catch (err) {
        return res.status(500).json(`User Update Error: ${err}`);
    }
}

const destroy = async (req, res) => {
    try {
        let destroyUser = await db.User.findOneAndDelete({_id: req.params.id});
        if (!destroyUser) return res.status(404).json(`Error: Could not delete user`);
        return res.json(destroyUser);
    } catch (err) {
        return res.status(500).json(`User Delete Error: ${err}`);
    }
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}