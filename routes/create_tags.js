const express = require('express');
const app = express.Router();
const modelData = require('../database/models/data');
const validation = require('../validation/validateToken');

app.post("/", validation.validateToken, (request, response) => {
   
   function create_new_tag(){
          modelData.quidax_book_tags.create({
            deleted: request.body.deleted,
            tags: request.body.tags,
            user_uuid: request.body.user_uuid,
            deleted: false
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

    function find_a_tag(){
        modelData.quidax_book_tags.findOne({
            where: {
              book_id: request.body.book_id
            }
        }).then(resp => {
            console.log(resp)
            if(resp.length == 0){
                create_new_tag();
            }else{
                response.status(400).json({ errors: "Tag with this book_id already exist"})
            }
        }, errMsg => {
            console.log(errMsg)
            return response.status(500).json({
                errors: errMsg.errors
            })
        });
    }

    find_a_tag();

});

module.exports = app;