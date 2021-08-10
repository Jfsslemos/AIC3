const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = 8079;

var corsOptions = {
	origin: "http://localhost:" + PORT
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const buscarNoBanco = () => {
    return { "cuzinho" : "piscando" }
}

app.use('/status', (req, res) => {
    const response = buscarNoBanco();
    res.send(response);
});

app.use('/tchau', (req, res) => {
    res.send("Goodbye")
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});