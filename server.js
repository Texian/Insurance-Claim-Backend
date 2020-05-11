const express = require('express');
const app = express();
const PORT = 4000;

app.get('/',(req, res) => {
    res.send('Hello world');
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));