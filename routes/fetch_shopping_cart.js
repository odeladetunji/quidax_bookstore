const express = require('express');
const app = express.Router();
const modelData = require('../database/models/data');
const tokenValidation = require('../validation/validateToken');

app.get("/", tokenValidation.validateToken, (request, response) => {

    modelData.quidax_books_shopping_cart.findAll({
        where: {
            user_uuid: request.query.user_uuid
        }
    }).then(result => {
        return response.send(result);
    })
});

module.exports = app;