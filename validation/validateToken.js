
const express = require('express');
const app = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();

function validateToken(req, res, next){
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if(token === null) return res.sendStatus(401);
    console.log(token)
    jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        next();
    });
}

module.exports = { validateToken }