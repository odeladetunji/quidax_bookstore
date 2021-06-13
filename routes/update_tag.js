const express = require('express');
const app = express.Router();
const modelData = require('../database/models/data');
const validation = require('../validation/validateToken');

app.put("/", validation.validateToken, (request, response) => {
    

    modelData.quidax_book_tags.findOne({
        where: {
            id: request.body.id,
            book_id: request.body.book_id
        }
    }).then(resp => {
        resp.update({
            tag: request.body.tags,
        }).then(result => {
            let responsePayload = {}; 
            responsePayload['body'] = {}
            responsePayload['message'] = 'Tags Successfully Updated';
            responsePayload['body'] = result;

            return response.send(responsePayload);

        }, (errMsg) => {
            console.log(errMsg)
            return response.status(400).json({ errors: errMsg});
        });
    }, (errMsg) => {
        console.log(errMsg)
        return response.status(400).json({ errors: "Tag with this id not found"});
    });
    

});

module.exports = app;
