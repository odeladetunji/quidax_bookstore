const express = require('express');
const app = express.Router();
const modelData = require('../database/models/data');
const validation = require('../validation/validateToken');

app.post("/", validation.validateToken, (request, response) => {
   
    function quidax_books_details(){
        modelData.quidax_books_details.create({
            id: request.body.id,
            updated_by: request.body.updated_by,
            deleted: request.body.deleted,
            release_date: request.body.release_date,
            summary: request.body.summary,
            title: request.body.title,
            publisher: request.body.publisher,
            genre: request.body.genre,
            book_title: request.body.book_title,
            create_date: request.body.create_date,
            created_by: request.body.created_by,
            copies_sold: request.body.copies_sold,
            book_id: request.body.book_id,
            author: request.body.author
          }).then(resp => {
              let responsePayload = {}; 
              responsePayload['body'] = {}
              responsePayload['message'] = 'Book Details Successfully Updated';
              responsePayload['body']['book_details'] = resp;
              return responsePayload;
          }, (errMsg) => {
              console.log(errMsg)
              return response.status(422).json({
                  errors: errMsg.errors
              })
          });
    }

    modelData.quidax_books_details.findAll({
        where: {
          id: request.body.id,
          title: request.body.title
        }
    }).then(resp => {
        if(resp.length == 0){
            return response.status(400).json({ errors: "Book details with this id and title does not exist"})
        }else{
            return response.send(quidax_books_details());
        }
    });
});

module.exports = app;