require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 4000;
const db = require('./Models');
const routes = require('./Routes');
const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api/v1', routes.auth);
app.use('/api/v1', routes.api);
app.get('/',(req, res) => {
    res.send(`Server running on port ${PORT}`);
});

app.listen(PORT, () => console.log(`Express server running at http://localhost:${PORT}`));