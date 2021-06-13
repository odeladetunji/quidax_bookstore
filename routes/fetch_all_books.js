const express = require('express');
const app = express.Router();
const modelData = require('../database/models/data');
const tokenValidation = require('../validation/validateToken');

app.get("/", tokenValidation.validateToken, (request, response) => {

    modelData.quidax_books.findAll({
        limit: 20,
        OffSet: 0
    }).then(result => {
        return response.send(result);
    })
});

module.exports = app;