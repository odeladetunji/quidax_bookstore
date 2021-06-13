const express = require('express');
const app = express.Router();
const modelData = require('../database/models/data');
const validation = require('../validation/validateToken');

app.put("/", validation.validateToken, (request, response) => {
    
    function update_a_book(){
        modelData.quidax_books.create({
            id: request.body.id,
            mime_type: request.body.mime_type,
            book_picture: request.body.book_picture,
            create_date: request.body.create_date,
            created_by: request.body.created_by,
            lastactivity_by: request.body.lastactivity_by,
            lastactivity_date: request.body.lastactivity_date,
            price: request.body.price, 
            featured: request.body.featured,
            featured_count: request.body.featured_count
          }).then(resp => {
              let responsePayload = {}; 
              responsePayload['body'] = {}
              responsePayload['message'] = 'Book Successfully Updated';
              responsePayload['body']['book'] = resp;

              let bookDetails = update_book_details();
              responsePayload['body']['book_details'] = bookDetails;

              return responsePayload;
          }, (errMsg) => {
              console.log(errMsg)
              return response.status(422).json({
                  errors: errMsg.errors
              })
          });
    }

    function update_book_details(){

        modelData.quidax_books_details.create({
            id: request.body.id,
            updated_by: request.body.book_details.updated_by,
            deleted: request.body.book_details.deleted,
            release_date: request.body.book_details.release_date,
            summary: request.body.book_details.summary,
            title: request.body.book_details.title,
            publisher: request.body.book_details.publisher,
            genre: request.body.book_details.genre,
            book_title: request.body.book_details.book_title,
            create_date: request.body.book_details.create_date,
            created_by: request.body.book_details.created_by,
            copies_sold: request.body.book_details.copies_sold,
            book_id: request.body.book_details.book_id,
            author: request.body.book_details.author
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
          title: request.body.title,
          id: request.body.id
        }
    }).then(quidax_books => {
        if(quidax_books.length == 0){
            return response.status(400).json({ errors: "A Book with this id and title does not exist"})
        }else{
            return response.send(update_a_book());
        }
    });

});

module.exports = app;
