const mongoose = require('mongoose')
const bookDetailsSchema = require('./reviews-schema')
const reviewsModel = mongoose.model(
    'BooksModel',
    bookDetailsSchema
)

module.exports = reviewsModel