const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Welcome to Think Code! 🎉');
});


module.exports = app;