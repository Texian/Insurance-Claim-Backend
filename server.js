const express = require('express');
const app = express();
const bodyParser = require('body-parser');
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

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api/v1', routes.auth);
app.use('/api/v1', routes.api);

app.get('/',(req, res) => {
    res.send(`Server running on port ${PORT}`);
});

app.listen(PORT, () => console.log(`Express server running at http://localhost:${PORT}`));