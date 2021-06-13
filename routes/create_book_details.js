const express = require('express');
const app = express.Router();
const modelData = require('../database/models/data');
const validation = require('../validation/validateToken');

app.post("/", validation.validateToken, (request, response) => {
   
   function quidax_books_details(){
          modelData.quidax_books_details.create({
            updated_by: request.body.updated_by,
            deleted: request.body.deleted,
            release_date: request.body.release_date,
            summary: request.body.summary,
            title: request.body.title,
            publisher: request.body.publisher,
            genre: request.body.genre,
            created_date: request.body.create_date,
            created_by: request.body.created_by,
            copies_sold: request.body.copies_sold,
            book_id: request.body.book_id,
            author: request.body.author
          }).then(resp => {
            console.log(resp)
              let responsePayload = {}; 
              responsePayload['body'] = {}
              responsePayload['message'] = 'Book Details Successfully Created';
              responsePayload['body'] = resp;
              return response.send(responsePayload);
          }, (errMsg) => {
              console.log(errMsg)
              return response.status(422).json({
                  errors: errMsg.errors
              })
          });
    }

    function fire_book_update(){
        modelData.quidax_books_details.findAll({
            where: {
              book_id: request.body.book_id
            }
        }).then(resp => {
            console.log(resp)
            if(resp.length == 0){
                quidax_books_details();
              
            }else{
                response.status(400).json({ errors: "This book with this book_id already exist"})
            }
        });
    }

    fire_book_update();

});

module.exports = app;