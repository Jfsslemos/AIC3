const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const routes = require('./routes/index.js');

const PORT = 8079;

var corsOptions = {
	origin: "http://localhost:" + PORT
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes); 

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});