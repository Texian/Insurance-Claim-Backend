const db = require('../Models');

const index = async (req, res) => {
    try {
        const items = await db.Item.find({});
        if (!items) return res.status(404).json(`Error: No items found`);
        return res.json(items);
    } catch (err) {
        return res.status(500).json(`Item Index Error: ${err}`);
    }
}

const show = async (req, res) => {
    try {
        const item = await db.Item.findOne({ _id: req.params.id });
        if (!item) return res.status(404).json(`Error: No item found`);
        return res.json(item);
    } catch (err) {
        return res.status(500).json(`item Find Error: ${err}`);
    }
}

const create = async (req, res) => {
    try {
        const newItem = await db.Item.create(req.body);
        if (!newItem) return res.status(404).json(`Error: Could not create new item`);
        return res.json(newItem);
    } catch (err) {
        return res.status(500).json(`Item Create Error: ${err}`);
    }
}

const update = async (req, res) => {
    try {
        let itemToUpdate = await db.Item.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!itemToUpdate) return res.status(404).json(`Error: Could not update item`);
        return res.json(itemToUpdate);
    } catch (err) {
        return res.status(500).json(`Item Update Error: ${err}`);
    }
}

const destroy = async (req, res) => {
    try {
        let destroyItem = await db.item.findOneAndDelete({ _id: req.params.id });
        if (!destroyItem) return res.status(404).json(`Error: Could not delete item`);
        return res.json(destroyItem);
    } catch (err) {
        return res.status(500).json(`Item Delete Error: ${err}`);
    }
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}