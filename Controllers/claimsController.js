const db = require('../Models');

const index = async (req, res) => {
    try {
        const claims = await db.Claim.find({});
        if (!claims) return res.status(404).json(`Error: No claims found`);
        return res.json(claims);
    } catch (err) {
        return res.status(500).json(`Claim Index Error: ${err}`);
    }
}

const show = async (req, res) => {
    try {
        const claim = await db.claim.findOne({ _id: req.params.id });
        if (!claim) return res.status(404).json(`Error: No claim found`);
        return res.json(claim);
    } catch (err) {
        return res.status(500).json(`Claim Find Error: ${err}`);
    }
}

const create = async (req, res) => {
    try {
        const newClaim = await db.claim.create(req.body);
        if (!newClaim) return res.status(404).json(`Error: Could not create new claim`);
        return res.json(newClaim);
    } catch (err) {
        return res.status(500).json(`Claim Create Error: ${err}`);
    }
}

const update = async (req, res) => {
    try {
        let claimToUpdate = await db.claim.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!claimToUpdate) return res.status(404).json(`Error: Could not update claim`);
        return res.json(claimToUpdate);
    } catch (err) {
        return res.status(500).json(`Claim Update Error: ${err}`);
    }
}

const destroy = async (req, res) => {
    try {
        let destroyClaim = await db.claim.findOneAndDelete({ _id: req.params.id });
        if (!destroyClaim) return res.status(404).json(`Error: Could not delete claim`);
        return res.json(destroyClaim);
    } catch (err) {
        return res.status(500).json(`Claim Delete Error: ${err}`);
    }
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}