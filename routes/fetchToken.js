const express = require('express');
const app = express.Router();
const jwt = require('jsonwebtoken');
const modelData = require('../database/models/data');
let crypto = require("crypto");

require('dotenv').config();


app.post("/", (request, response) => {
    
    function create_a_user(user_uuid){
        modelData.quidax_books_users.create({
            "user_uuid": user_uuid,
            "user_name": null
          }).then(resp => {
              console.log(resp)
          }, (errMsg) => {
              console.log(errMsg)
          });
    }

    let user;
    function checkIfIdExist(){
        //Cryptography
        user = crypto.randomBytes(20).toString('hex');
        modelData.quidax_books_users.findAll({
            where: {
                user_uuid: user
            }
        }).then(result => {
            if(result.length != 0)
                return checkIfIdExist();
        
             create_a_user(user);
            return response.send(jwt.sign(user, process.env.ACCESS_TOKEN_KEY));
        }, (errMsg) => {
        
            console.log(errMsg);
            return response.status(500).json({
                errors: errMsg.errors
            })
        });
    }

    checkIfIdExist();

});

module.exports = app;