const express = require('express');
const app = express.Router();
const modelData = require('../database/models/data');
const validation = require('../validation/validateToken');

app.delete("/", validation.validateToken, (request, response) => {
    

    modelData.quidax_books_shopping_cart.findOne({
        where: {
            id: request.body.id
        }
    }).then(resp => {
        resp.update({
           deleted: request.body.deleted
        }).then(result => {
            let responsePayload = {}; 
            responsePayload['body'] = {}
            responsePayload['message'] = 'Shopping Cart Successfully Deleted';
            responsePayload['body'] = result;

            return response.send(responsePayload);

        }, (errMsg) => {
            console.log(errMsg)
            return response.status(400).json({ errors: errMsg});
        });
    }, (errMsg) => {
        console.log(errMsg)
        return response.status(400).json({ errors: "Shopping Cart with this id not found"});
    });
    

});

module.exports = app;
