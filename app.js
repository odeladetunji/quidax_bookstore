const app = require('express')();
const server = require('http').Server(app);
const cors = require('cors');
const bodyParser = require('body-parser');
const fetchToken = require('./routes/fetchToken');
const createABook = require('./routes/create_a_book');
const createABookDetails = require('./routes/create_book_details');
const createShoppingCart = require('./routes/create_shopping_cart');
const fetchAllBooks = require('./routes/fetch_all_books');
const fetchABooksDetails = require('./routes/fetch_a_book_details');
const fetchABook = require('./routes/fetch_a_book');
const fetchShoppingCart = require('./routes/fetch_shopping_cart');

const { Sequelize } = require('sequelize');
const { create } = require('domain');
const { request } = require('express');
const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/postgres');

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

server.listen(9000, function(){
	console.log('Shape and Area Api');
});

async function testDb(){
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	  } catch (error) {
		console.error('Unable to connect to the database:', error);
	  }
}

testDb();


module.exports = app;