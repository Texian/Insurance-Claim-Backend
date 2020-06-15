const express = require('express');
const app = express();
//const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const PORT = process.env.PORT || 4000;
const routes = require('./Routes');
const db = require('./Models');
const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
    optionsSuccessStatus: 200
}

//----------------------------------------------------- Middleware -----------------------------------------------------//
app.use(cors(corsOptions));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//----------------------------------------------------- Routes -----------------------------------------------------//
app.use('/api/v1', routes.auth);
app.use('/api/v1', routes.api);

app.get('/',(req, res) => {
    res.send(`Server running on port ${PORT}`);
});

app.listen(PORT, () => console.log(`Express server running at http://localhost:${PORT}`));