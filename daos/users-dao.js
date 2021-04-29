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

const findUserById = (userId) => usersModel.findById(userId)

const updateUser= (userId,updated_credentials) => {
    // console.log(userId,updated_credentials.firstName)
    return usersModel.updateOne({_id:userId},{$set :
            {
                userName: updated_credentials.userName,
                firstName: updated_credentials.firstName,
                lastName: updated_credentials.lastName,
            }})
}

const deleteUser= (userId) => usersModel.findByIdAndRemove(userId)

module.exports = {
    findUserByUsername,
    findUserByCredentials,
    createUser,
    updateUser,
    findUserById,
    deleteUser
}


