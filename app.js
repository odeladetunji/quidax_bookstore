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

const { Sequelize } = require('sequelize');
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
app.use('/update_a_book', updateABook);
app.use('/update_book_details', updateABookDetails);
app.use('/update_shopping_cart', updateShoppingCart);
app.use('/fetch_featured_books', fetchFeaturedBooks);
app.use('/delete_a_book', deleteABook);
app.use('/delete_book_details', deleteABookDetails);
app.use('/delete_shopping_cart', deleteAShoppingCart);
app.use('/rate_a_book', rateABook);
app.use('/average_ratings', averageRatings);

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