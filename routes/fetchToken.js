const express = require('express');
const app = express.Router();
const validation = require('../validation/emailAndPassword');
const jwt = require('jsonwebtoken');
require('dotenv').config();

app.get("/", (request, response) => {
    validation.emailValidation(request, response);
    validation.passwordValidation(request, response);

    const user = {email: request.body.email, password: request.body.password};
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_KEY);
    
    return response.send(token);
});

module.exports = app;