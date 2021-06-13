const express = require('express');
const app = express.Router();
const modelData = require('../database/models/data');
const validation = require('../validation/validateToken');

app.put("/", validation.validateToken, (request, response) => {
    

    modelData.quidax_books_shopping_cart.findOne({
        where: {
            id: request.body.id
        }
    }).then(resp => {
        resp.update({
            user_uuid: request.body.user_uuid,
            deleted: request.body.deleted,
            book_title: request.body.book_title,
            create_date: request.body.create_date,
            book_id: request.body.book_id,
            price_per_piece: request.body.price_per_piece,
            quantity: request.body.quantity
        }).then(result => {
            let responsePayload = {}; 
            responsePayload['body'] = {}
            responsePayload['message'] = 'Shopping Cart Successfully Updated';
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
