const express = require('express');
const app = express.Router();
const modelData = require('../database/models/data');
const validation = require('../validation/emailAndPassword');
const tokenValidation = require('../validation/validateToken');

app.get("/", tokenValidation.validateToken, (request, response) => {

    validation.emailValidation(request, response);
    validation.passwordValidation(request, response);

    modelData.quidax_books.findAll({
        where: {
            id: request.query.id
        }
    }).then(result => {
        return response.send(result);
    })
});

module.exports = app;