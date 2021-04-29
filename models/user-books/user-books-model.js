const mongoose = require('mongoose')
const userBooks = require('./user-books-schema');
const userBooksModel = mongoose.model(
    'UserBookModel',
    userBooks
)

module.exports = userBooksModel