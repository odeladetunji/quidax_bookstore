const express = require('express');
const app = express.Router();
const modelData = require('../database/models/data');
const validation = require('../validation/validateToken');

app.post("/", validation.validateToken, (request, response) => {
   
   let responsePayload = {}; 
   function newLike(){
          modelData.quidax_book_likes.create({
            user_uuid: request.body.user_uuid,
            book_id: request.body.book_id,
            likes: request.body.likes,
            deleted: false
          }).then(resp => {
              responsePayload['body'] = {}
              responsePayload['message'] = 'Book Liked Successfully';
              responsePayload['body'] = resp;
              return response.send(responsePayload);
          }, (errMsg) => {
              console.log(errMsg)
              return response.status(422).json({
                  errors: errMsg.errors
              })
          });
    }

    function likeABook(){
        modelData.quidax_book_likes.findOne({
            where: {
              book_id: request.body.book_id,
              user_uuid: request.body.user_uuid
            }
        }).then(likes => {
            if(likes == null){
                console.log('new like was fired')
                newLike()
            }else{
                return response.status(201).json({errMsg: "You have liked this book before"})
            }

        }, errMsg => {
            console.log(errMsg)
            return response.status(422).json({
                errors: errMsg.errors
            })
        });
    }

    likeABook();

});

module.exports = app;