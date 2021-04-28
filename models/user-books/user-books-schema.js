const mongoose = require('mongoose')
const userBooks = mongoose.Schema({
    _id: String,
    userId: [{type: String,
    ref:'UsersModel'}],
    bookId: String

}, {collection: 'user_books'})

module.exports = userBooks