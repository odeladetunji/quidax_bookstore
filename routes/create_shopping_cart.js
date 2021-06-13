const express = require('express');
const app = express.Router();
const modelData = require('../database/models/data');
const validation = require('../validation/validateToken');

app.post("/", validation.validateToken, (request, response) => {
        modelData.quidax_books_shopping_cart.create({
            user_uuid: request.body.user_uuid,
            deleted: request.body.deleted,
            book_title: request.body.book_title,
            create_date: request.body.create_date,
            book_id: request.body.book_id,
            price_per_piece: request.body.price_per_piece,
            quantity: request.body.quantity
          }).then(resp => {
              let responsePayload = {}; 
              responsePayload['body'] = {}
              responsePayload['message'] = 'Shopping Cart Created Successfully';
              responsePayload['body'] = resp

              return response.send(responsePayload);

          }, (errMsg) => {
              console.log(errMsg)
              return response.status(422).json({
                  errors: errMsg.errors
              })
          });
});

module.exports = app;