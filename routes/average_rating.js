const express = require('express');
const app = express.Router();
const modelData = require('../database/models/data');
const tokenValidation = require('../validation/validateToken');

app.post("/", tokenValidation.validateToken, (request, response) => {

    modelData.quidax_books_ratings.findAll({
        where: {
            book_id: request.query.book_id
        }
    }).then(result => {
       let avarageRating = 0;
       console.log(result)
       for(let i=0; i<result.length; i++){
           console.log(result[i]['ratings'])
           avarageRating = avarageRating + result[i]['ratings'];
       }
       avarageRating = avarageRating / result.length;
    //    console.log(avarageRating + "ppppp" + result.length)
       let responsePayload = {}
       responsePayload['message'] = 'Average Ratings';
    //    console.log(avarageRating)
       responsePayload['body'] = {}
       responsePayload['body']['average_rating'] = avarageRating;
       responsePayload['body']['book_id'] = result.book_id;

       return response.send(responsePayload);
       
    }, errMsg => {
        console.log(errMsg)
        return response.status(500).json({errMsg: errMsg})
    });
});

module.exports = app;