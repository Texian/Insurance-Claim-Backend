const db = require('../Models');

const index = async (req, res) => {
    try {
        const floorplans = await db.Floorplan.find({});
        if (!floorplans) return res.status(404).json(`Error: No floorplans found`);
        return res.json(floorplans);
    } catch (err) {
        return res.status(500).json(`Floorplan Index Error: ${err}`);
    }
}

const show = async (req, res) => {
    try {
        const floorplan = await db.Floorplan.findOne({ _id: req.params.id });
        if (!floorplan) return res.status(404).json(`Error: No floorplan found`);
        return res.json(floorplan);
    } catch (err) {
        return res.status(500).json(`Floorplan Find Error: ${err}`);
    }
}

const create = async (req, res) => {
    try {
        const newFloorplan = await db.Floorplan.create(req.body);
        if (!newFloorplan) return res.status(404).json(`Error: Could not create new floorplan`);
        return res.json(newFloorplan);
    } catch (err) {
        return res.status(500).json(`Floorplan Create Error: ${err}`);
    }
}

const update = async (req, res) => {
    try {
        let floorplanToUpdate = await db.Floorplan.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!floorplanToUpdate) return res.status(404).json(`Error: Could not update floorplan`);
        return res.json(floorplanToUpdate);
    } catch (err) {
        return res.status(500).json(`floorplan Update Error: ${err}`);
    }
}

const destroy = async (req, res) => {
    try {
        let destroyFloorplan = await db.Floorplan.findOneAndDelete({ _id: req.params.id });
        if (!destroyFloorplan) return res.status(404).json(`Error: Could not delete floorplan`);
        return res.json(destroyFloorplan);
    } catch (err) {
        return res.status(500).json(`Floorplan Delete Error: ${err}`);
    }
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}