const express = require('express');
const app = express.Router();
const modelData = require('../database/models/data');
const validation = require('../validation/validateToken');

app.post("/", validation.validateToken, (request, response) => {
   
    function update_shopping_cart(){
        modelData.quidax_books_shopping_cart.create({
            id: request.body.id,
            user_uuid: request.body.user_uuid,
            deleted: request.body.deleted,
            book_title: request.body,book_title,
            create_date: request.body.create_date,
            book_id: request.body.quidax_books_details,
            price_per_piece: request.body.price_per_piece,
            quantity: request.body.quidax_books_details
          }).then(resp => {
              let responsePayload = {}; 
              responsePayload['body'] = {}
              responsePayload['message'] = 'Users shopping cart was updated successfully';
              responsePayload['body'] = resp;
              return responsePayload;
          }, (errMsg) => {
              console.log(errMsg)
              return response.status(422).json({
                  errors: errMsg.errors
              })
          });
    }

    modelData.quidax_books_shopping_cart.findAll({
        where: {
          id: request.body.id
        }
    }).then(resp => {
        if(resp.length == 0){
            return response.send(update_shopping_cart());
          
        }else{
            response.status(400).json({ errors: "Item with this Id not found in shopping cart"})
        }
    });

});

module.exports = app;