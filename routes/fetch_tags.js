const express = require('express');
const app = express.Router();
const modelData = require('../database/models/data');
const tokenValidation = require('../validation/validateToken');

app.get("/", tokenValidation.validateToken, (request, response) => {

    modelData.quidax_book_tags.findAll({
        where: {
            book_uuid: request.query.book_uuid
        }
    }).then(result => {
        return response.send(result);
    })
});

module.exports = app;