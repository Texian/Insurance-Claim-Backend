require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4000;

const db = require('./Models');
const routes = require('./Routes');

app.use(bodyParser.json());
//app.use('/', routes.views);
//app.use('/api/v1', routes.api);
app.get('/',(req, res) => {
    res.send(`Server running on port ${PORT}`);
});

app.listen(PORT, () => console.log(`Express server running at http://localhost:${PORT}`));