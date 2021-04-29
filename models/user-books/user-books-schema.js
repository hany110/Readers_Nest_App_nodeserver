const mongoose = require('mongoose')
const userBooks = mongoose.Schema({
    // _id: String,
    userId: String,
    bookId: String

}, {collection: 'user_book'})

module.exports = userBooks