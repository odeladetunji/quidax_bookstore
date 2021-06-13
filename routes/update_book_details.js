const express = require('express');
const app = express.Router();
const modelData = require('../database/models/data');
const validation = require('../validation/validateToken');

app.put("/", validation.validateToken, (request, response) => {
    

    modelData.quidax_books_details.findOne({
        where: {
            id: request.body.id
        }
    }).then(resp => {
        resp.update({
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
        }).then(result => {
            let responsePayload = {}; 
            responsePayload['body'] = {}
            responsePayload['message'] = 'Book Details Successfully Updated';
            responsePayload['body'] = result;

            return response.send(responsePayload);

        }, (errMsg) => {
            console.log(errMsg)
            return response.status(400).json({ errors: errMsg});
        });
    }, (errMsg) => {
        console.log(errMsg)
        return response.status(400).json({ errors: "A book detail with this id not found"});
    });
    

});

module.exports = app;
