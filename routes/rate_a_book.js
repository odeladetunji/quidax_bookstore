const express = require('express');
const app = express.Router();
const modelData = require('../database/models/data');
const validation = require('../validation/validateToken');

app.post("/", validation.validateToken, (request, response) => {
   
   let responsePayload = {}; 
   function create_ratings(){
          modelData.quidax_books_ratings.create({
            mime_type: request.body.mime_type,
            lastactivity_date:  new Date(),
            user_picture: request.body.user_uuid,
            user_uuid: request.body.user_uuid,
            created_date: new Date(),
            book_id: request.body.book_id,
            ratings: request.body.ratings,
          }).then(resp => {
              responsePayload['body'] = {}
              responsePayload['message'] = 'Book Rated Successfully';
              responsePayload['body'] = resp;
              return response.send(responsePayload);
          }, (errMsg) => {
              console.log(errMsg)
              return response.status(422).json({
                  errors: errMsg.errors
              })
          });
    }

    function rateABook(){
        modelData.quidax_books_ratings.findOne({
            where: {
              book_id: request.body.book_id,
              user_uuid: request.body.user_uuid
            }
        }).then(rating => {
            if(rating.length != 0){
                rating.lastactivity_date = new Date();
                rating.ratings = request.body.ratings
                //updating rating
                rating.update().then(resp => {
                    responsePayload['body'] = {}
                    responsePayload['message'] = 'Book Rated Successfully';
                    responsePayload['body'] = resp;

                    return response.send(responsePayload);
                }, errMsg => {
                    return response.status(500).json({errMsg: errMsg})
                })
            }else{
                //create new
                create_ratings()
            }

        }, errMsg => {
            return response.status(422).json({
                errors: errMsg.errors
            })
        });
    }

    rateABook();

});

module.exports = app;