const express = require('express');
const app = express.Router();
const modelData = require('../database/model/data');
const validation = require('../validation/emailAndPassword');
const tokenValidation = require('../validation/validateToken');

app.get("/", tokenValidation.validateToken, (request, response) => {

    validation.emailValidation(request, response);
    validation.passwordValidation(request, response);

    modelData.users.findAll({
        where: {
              email: request.query.email
        },
        limit: 20,
        OffSet: 0
    }).then(result => {
        return response.send(result);
    })
});

module.exports = app;