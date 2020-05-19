const db = require('../Models');

const index = async (req, res) => {
    try {
        const rooms = await db.Room.find({});
        if (!rooms) return res.status(404).json(`Error: No rooms found`);
        return res.json(rooms);
    } catch (err) {
        return res.status(500).json(`Room Index Error: ${err}`);
    }
}

const show = async (req, res) => {
    try {
        const room = await db.Room.findOne({ _id: req.params.id });
        if (!room) return res.status(404).json(`Error: No room found`);
        return res.json(room);
    } catch (err) {
        return res.status(500).json(`Room Find Error: ${err}`);
    }
}

const create = async (req, res) => {
    try {
        const newRoom = await db.Room.create(req.body);
        if (!newRoom) return res.status(404).json(`Error: Could not create new room`);
        return res.json(newRoom);
    } catch (err) {
        return res.status(500).json(`Room Create Error: ${err}`);
    }
}

const update = async (req, res) => {
    try {
        let roomToUpdate = await db.Room.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!roomToUpdate) return res.status(404).json(`Error: Could not update room`);
        return res.json(roomToUpdate);
    } catch (err) {
        return res.status(500).json(`Room Update Error: ${err}`);
    }
}

const destroy = async (req, res) => {
    try {
        let destroyRoom = await db.Room.findOneAndDelete({ _id: req.params.id });
        if (!destroyRoom) return res.status(404).json(`Error: Could not delete room`);
        return res.json(destroyRoom);
    } catch (err) {
        return res.status(500).json(`Room Delete Error: ${err}`);
    }
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}