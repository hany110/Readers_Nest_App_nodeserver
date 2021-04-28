const usersModel = require("../models/users/users-models")
const findUserByUsername = (username) => {
    // return usersModel.find({username: username})
    console.log(username + "Username hai bhai")
    return usersModel.find({userName:username})
}
const findUserByCredentials = (credetials) => {
    console.log(credetials+ "Credentials hai bhai")
    return usersModel.findOne({
        userName: credetials.userName,
        password: credetials.password
    })
    // return usersModel.find({username})
}
const createUser = (user) => {
    console.log(user.userName + "Create hua")
    return usersModel.create(user)
}
module.exports = {
    findUserByUsername,
    findUserByCredentials,
    createUser
}


