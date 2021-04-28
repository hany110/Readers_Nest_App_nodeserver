const mongoose = require('mongoose')
const reviewsSchema = mongoose.Schema({
    _id: String,
    userId: [{type: String,
        ref:'UsersModel'}],
    bookId: [{type: String,
        ref:'BooksModel'}],
    review: String,
    ratings: Number
}, {collection: 'book_details'})

module.exports = reviewsSchema