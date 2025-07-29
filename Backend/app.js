const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello welocom to the ThinkCode! 🎉');
});


module.exports = app;

