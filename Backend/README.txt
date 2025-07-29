ThinkCode Project


Backend -> Main server creation;

app.js
server.js

installed packages for packages 
npm i express
npm i nodemon
npm i dotenv

package.json() file script 

"script":{
	"start": "node server.js",
	"dev": "nodemon server.js"
}

Base server setting using the app.js and server.js

app.js

const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send("Hello Welcome to ThinkCode... Demo server");
});


module.export = app;


server.js

const dotenv = require('dotenv').config();
const app = require('./app');

const port = proccess.env.PORT || 3000;

app.listen(port, () => {
	console.log(`The server is started ${port}`);
})

.env
PORT = 4000


