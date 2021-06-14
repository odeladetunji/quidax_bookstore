const express = require('express');
const app = express.Router();
const modelData = require('../database/models/data');
const validation = require('../validation/validateToken');

app.post("/", validation.validateToken, (request, response) => {
    function create_a_book(){
        modelData.quidax_books.create({
            mime_type: request.body.book.mime_type,
            book_picture: request.body.book.book_picture,
            created_date: request.body.book.create_date,
            created_by: request.body.book.created_by,
            lastactivity_by: request.body.book.lastactivity_by,
            lastactivity_date: request.body.book.lastactivity_date,
            deleted: request.body.book.deleted,
            price: request.body.book.price, 
            featured: request.body.book.featured,
            featured_count: request.body.book.featured_count
          }).then(resp => {
              let responsePayload = {}; 
              responsePayload['body'] = {}
              responsePayload['message'] = 'Book Successfully Created';
              responsePayload['body']['book'] = resp;
              responsePayload['body']['book_details'] = create_book_details(resp.id);
              return response.send(responsePayload);
        
          }, (errMsg) => {
              console.log(errMsg)
              return response.status(422).json({
                  errors: errMsg.errors
              })
          });
    }

    function create_book_details(book_id){

        modelData.quidax_books_details.create({
            updated_by: request.body.book_details.updated_by,
            deleted: request.body.book_details.deleted,
            release_date: request.body.book_details.release_date,
            summary: request.body.book_details.summary,
            title: request.body.book_details.title,
            publisher: request.body.book_details.publisher,
            genre: request.body.book_details.genre,
            created_date: request.body.book_details.create_date,
            created_by: request.body.book_details.created_by,
            copies_sold: request.body.book_details.copies_sold,
            book_id: book_id,
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

    
    create_a_book();
});

module.exports = app;