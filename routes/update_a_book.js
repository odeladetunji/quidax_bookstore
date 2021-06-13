const express = require('express');
const app = express.Router();
const modelData = require('../database/models/data');
const validation = require('../validation/validateToken');

app.put("/", validation.validateToken, (request, response) => {
    

    modelData.quidax_books.findOne({
        where: {
            id: request.body.id
        }
    }).then(resp => {
        resp.update({
            mime_type: request.body.mime_type,
            book_picture: request.body.book_picture,
            created_date: request.body.create_date,
            created_by: request.body.created_by,
            lastactivity_by: request.body.lastactivity_by,
            lastactivity_date: request.body.lastactivity_date,
            price: request.body.price, 
            featured: request.body.featured,
            featured_count: request.body.featured_count
        }).then(result => {
            let responsePayload = {}; 
            responsePayload['body'] = {}
            responsePayload['message'] = 'Book Successfully Updated';
            responsePayload['body'] = result;

            return response.send(responsePayload);

        }, (errMsg) => {
            console.log(errMsg)
            return response.status(400).json({ errors: errMsg});
        });
    }, (errMsg) => {
        console.log(errMsg)
        return response.status(400).json({ errors: "book with this id not found"});
    });
    

});

module.exports = app;
