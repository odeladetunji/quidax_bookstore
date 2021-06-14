const express = require('express');
var fs = require('fs');
const app = require('express')();
const server = require('http').Server(app);
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fetchToken = require('./routes/fetchToken');
const createABook = require('./routes/create_a_book');
const createABookDetails = require('./routes/create_book_details');
const createShoppingCart = require('./routes/create_shopping_cart');
const fetchAllBooks = require('./routes/fetch_all_books');
const fetchABooksDetails = require('./routes/fetch_a_book_details');
const fetchABook = require('./routes/fetch_a_book');
const fetchFeaturedBooks = require('./routes/fetch_featured_books');
const fetchShoppingCart = require('./routes/fetch_shopping_cart');
const updateABook = require('./routes/update_a_book');
const updateABookDetails = require('./routes/update_book_details');
const updateShoppingCart = require('./routes/update_shopping_cart');
const deleteABook = require('./routes/delete_a_book');
const deleteABookDetails = require('./routes/delete_book_details');
const deleteAShoppingCart = require('./routes/delete_shopping_cart');
const rateABook = require('./routes/rate_a_book');
const averageRatings = require('./routes/average_rating');
const removeALike = require('./routes/remove_like');
const addALike = require('./routes/add_like');
const createTags = require('./routes/create_tags');
const fetchTags = require('./routes/fetch_tags');
const deleteTags = require('./routes/delete_tags');
const updateTags = require('./routes/update_tag');
const uploadImage = require('./routes/upload_image');

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/postgres');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false })); // urlencoded form parser
app.use(bodyParser.json())  // json parser
app.use(cors());

app.use('/fetchtoken', fetchToken);
app.use('/create_a_book', createABook)
app.use('/create_a_book_details', createABookDetails)
app.use('/create_shopping_cart', createShoppingCart)
app.use('/fetch_all_books', fetchAllBooks);
app.use('/fetch_a_book_details', fetchABooksDetails);
app.use('/fetch_a_book', fetchABook);
app.use('/fetch_shopping_cart', fetchShoppingCart);
app.use('/update_a_book', updateABook);
app.use('/update_book_details', updateABookDetails);
app.use('/update_shopping_cart', updateShoppingCart);
app.use('/fetch_featured_books', fetchFeaturedBooks);
app.use('/delete_a_book', deleteABook);
app.use('/delete_book_details', deleteABookDetails);
app.use('/delete_shopping_cart', deleteAShoppingCart);
app.use('/rate_a_book', rateABook);
app.use('/average_ratings', averageRatings);
app.use('/remove_a_like', removeALike);
app.use('/add_a_like', addALike);
app.use('/create_tags', createTags);
app.use('/update_tags', updateTags);
app.use('/delete_tags', deleteTags);
app.use('/fetch_tags', fetchTags);
app.use('/upload_image', uploadImage);


let dir = path.join(__dirname, 'public');

let mime = {
    html: 'text/html',
    txt: 'text/plain',
    css: 'text/css',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    js: 'application/javascript'
};

// app.get('*', function (req, res) {
//     let file = path.join(dir, req.path.replace(/\/$/, '/index.html'));
//     if (file.indexOf(dir + path.sep) !== 0) {
//         return res.status(403).end('Forbidden');
//     }
//     let type = mime[path.extname(file).slice(1)] || 'text/plain';
//     let s = fs.createReadStream(file);
//     s.on('open', function () {
//         res.set('Content-Type', type);
//         s.pipe(res);
//     });
//     s.on('error', function () {
//         res.set('Content-Type', 'text/plain');
//         res.status(404).end('Not found');
//     });
// });

app.use('*', function(req, res) {
  var reqpath = req.url.toString().split('?')[0];
  if (req.method !== 'GET') {
      res.statusCode = 501;
      res.setHeader('Content-Type', 'text/plain');
      return res.end('Method not implemented');
  }
  var file = path.join(dir, reqpath.replace(/\/$/, '/index.html'));
  if (file.indexOf(dir + path.sep) !== 0) {
      res.statusCode = 403;
      res.setHeader('Content-Type', 'text/plain');
      return res.end('Forbidden');
  }
  var type = mime[path.extname(file).slice(1)] || 'text/plain';
  var s = fs.createReadStream(file);
  s.on('open', function () {
      res.setHeader('Content-Type', type);
      s.pipe(res);
  });
  s.on('error', function () {
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 404;
      res.end('Not found');
  });
});


server.listen(9000, function(){
	console.log('Quidax Api');
});

async function testDb(){
	try {
		await sequelize.authenticate();
		console.log('Database Connection has been established successfully.');
	  } catch (error) {
		console.error('Unable to connect to the database:', error);
	  }
}

testDb();


module.exports = app;