const usersDao = require("../daos/users-dao");
/*const createUser=()=>{
usersDao.createUser();
}*/

const findAllUsers = () => {
    usersDao.findAllUsers();
}

const findUserByUsername = (username) => {
    usersDao.findUserByUsername(username)

}

const findUserByCredentials=(credetials)=>{
    usersDao.findUserByCredentials(credetials)
}
const createUser=(user)=>{
    usersDao.createUser(user)
}
const updateUser = (userId) =>{
    usersDao.updateUser(userId)
}
const deleteUser = (userId) =>{
    usersDao.deleteUser(userId)
}

module.exports ={
    findAllUsers,findUserByUsername,updateUser,deleteUser,findUserByCredentials
}