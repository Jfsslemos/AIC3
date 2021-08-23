const User = require('../model/User.js');

const getUser = (req, res) => {
    res.status(200).send({
        message: "Teste!"
    });
};

const userController = {
    getUser
}

module.exports = userController;

