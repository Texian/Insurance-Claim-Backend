const mongoose = require('mongoose');
const DB_URI = process.env.MONGODB_URI || 'mongodb.localhost:27017/insurance-claim-backend';

mongoose.connect(DB_URI, {
    useNewURLParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(`Caught error: ${err}`));

module.exports = {
    Claim: require('./Claim'),
    Floorplan: require('./Floorplan'),
    Item: require('./Item'),
    Room: require('./Room'),
    User: require('./User')
};