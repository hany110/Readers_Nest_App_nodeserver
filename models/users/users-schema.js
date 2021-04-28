const mongoose = require('mongoose')
const Schema = require("mongoose");
const ObjectId= Schema.ObjectId
const usersSchema = mongoose.Schema({

    // _id: ObjectId,
    firstName: String,
    lastName: String,
    userName: String,
    password: String,
    role: {type: String, enum: ['ADMIN','USER']}
}, {collection: 'users'})

module.exports = usersSchema