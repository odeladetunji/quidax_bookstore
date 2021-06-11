const express = require('express');
const app = express.Router();
const modelData = require('../database/model/data');
const validation = require('../validation/validateToken');

app.post("/", validation.validateToken, validation.validateToken, (request, response) => {
   
    function create_a_book(){
        modelData.quidax_books.create({
            "email": request.body.email,
            "password": request.body.password
          }).then(resp => {
              let responsePayload = {}; 
              responsePayload['body'] = {}
              responsePayload['message'] = 'Book Successfully Created';
              responsePayload['body']['book'] = resp;
              return responsePayload;
          }, (errMsg) => {
              console.log(errMsg)
              return response.status(422).json({
                  errors: errMsg.errors
              })
          });
    }

    function create_book_details(){

        modelData.quidax_books.create({
            "email": request.body.email,
            "password": request.body.password
          }).then(resp => {
              return resp;
          }, (errMsg) => {
              console.log(errMsg)
              return response.status(422).json({
                  errors: errMsg.errors
              })
          });
    }

    modelData.quidax_books.findAll({
        where: {
          title: request.body.title
        }
    }).then(quidax_books => {
        if(quidax_books.length == 0){
            let responsePayload = create_a_book();
            responsePayload.body.book_details = create_book_details();
            
        }else{
            response.status(400).json({ errors: "A book with this Title already exists"})
        }
    });

});

module.exports = app;