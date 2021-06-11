const express = require('express');
const app = express.Router();
const modelData = require('../database/model/data');
const validation = require('../validation/validateToken');

app.post("/", validation.validateToken, validation.validateToken, (request, response) => {
   
    function quidax_book_details(){
        modelData.quidax_books.create({
            "email": request.body.email,
            "password": request.body.password
          }).then(resp => {
              let responsePayload = {}; 
              responsePayload['body'] = {}
              responsePayload['message'] = 'Book Details Successfully created Created';
              responsePayload['body'] = resp;
              return responsePayload;
          }, (errMsg) => {
              console.log(errMsg)
              return response.status(422).json({
                  errors: errMsg.errors
              })
          });
    }

    modelData.quidax_book_details.findAll({
        where: {
          book_id: request.body.book_id
        }
    }).then(quidax_book_details => {
        if(quidax_book_details.length == 0){
            return quidax_book_details();
          
        }else{
            response.status(400).json({ errors: "A book with this Title already exists"})
        }
    });

});

module.exports = app;