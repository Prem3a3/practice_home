var express1 = require('express');
var app1 = express();
// Get All Books
app1.get('/books', function (req, res) {
    // Retrieve all books from the server
    // and send them as a response
    res.send('Retrieving all books...');
});
// Get a Book by ID
app1.get('/books/:id', function (req, res) {
    var bookId = req.params.id;
    // Retrieve the book with the provided ID from the server
    // and send it as a response
    res.send("Retrieving book with ID: ".concat(bookId));
});
// Create a Book
app.post('/books', function (req, res) {
    // Extract book information from the request body
    // and add the book to the server
    res.send('Creating a new book...');
});
// Update a Book
app.put('/books/:id', function (req, res) {
    var bookId = req.params.id;
    // Extract updated book information from the request body
    // and update the book with the provided ID on the server
    res.send("Updating book with ID: ".concat(bookId));
});
// Delete a Book
app.delete('/books/:id', function (req, res) {
    var bookId = req.params.id;
    // Delete the book with the provided ID from the server
    res.send("Deleting book with ID: ".concat(bookId));
});
// Start the server
app.listen(3000, function () {
    console.log('Server is running on port 3000');
});
var express = require('express');
var app = express();
// Get All Books
app.get('/books', function (req, res) {
    // Retrieve all books from the server
    // and send them as a response
    res.send('Retrieving all books...');
});
// Get a Book by ID
app.get('/books/:id', function (req, res) {
    var bookId = req.params.id;
    // Retrieve the book with the provided ID from the server
    // and send it as a response
    res.send("Retrieving book with ID: ".concat(bookId));
});
// Create a Book
app.post('/books', function (req, res) {
    // Extract book information from the request body
    // and add the book to the server
    res.send('Creating a new book...');
});
// Update a Book
app.put('/books/:id', function (req, res) {
    var bookId = req.params.id;
    // Extract updated book information from the request body
    // and update the book with the provided ID on the server
    res.send("Updating book with ID: ".concat(bookId));
});
// Delete a Book
app.delete('/books/:id', function (req, res) {
    var bookId = req.params.id;
    // Delete the book with the provided ID from the server
    res.send("Deleting book with ID: ".concat(bookId));
});
// Start the server
app.listen(3000, function () {
    console.log('Server is running on port 3000');
});
