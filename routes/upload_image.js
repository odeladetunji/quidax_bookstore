const express = require('express');
const app = express.Router();
const modelData = require('../database/models/data');
const validation = require('../validation/validateToken');
const multer = require('multer');

app.post("/", validation.validateToken, (request, response) => {
    let name_of_file;

    let storage =   multer.diskStorage({
        destination: function (request, file, callback) {
          callback(null, 'public/images');
        },
        filename: function (request, file, callback) {
         name_of_file = file.originalname;
         callback(null, file.originalname);
        }
    });
    
    let upload = multer({ storage : storage }).fields([
        { name: 'book_image', maxCount: 1 }
    ]);

    upload(request, response, function (err) { 
        if(err) throw err;
        upLoadImage();
    });


   function upLoadImage(){
        modelData.quidax_images.create({
            image_name: name_of_file
        }).then(resp => {
            let responsePayload = {}; 
            responsePayload['body'] = {}
            responsePayload['message'] = 'Image Successfully Saved';
            responsePayload['body']= {
                message: 'Image uploaded Successfully',
                filename: name_of_file,
                image_id: resp.id
            };
        
            return response.send(responsePayload);
        
        }, (errMsg) => {
            console.log(errMsg)
            return response.status(500).json({
                errors: errMsg.errors
            })
        });
   }

});

module.exports = app;


