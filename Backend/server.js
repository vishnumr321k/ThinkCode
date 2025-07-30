const dotenv = require('dotenv');
const app = require('./app');
const {connectDB}  = require('./db/db');
const port = 3000;


connectDB();

app.listen(port, () => {
    console.log(`The Server creation completing the port is :${port}`);
});