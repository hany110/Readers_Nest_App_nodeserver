const userBooksModel = require("../models/user-books/user-books-model");
const findBooksByUserId=(uid)=>{
    // console.log("dao",uid)
    return userBooksModel.find({userId: uid})
}

const saveBook=(uid,bid)=>{
    return userBooksModel.create({userId:uid,bookId:bid,bookStatus:"saved"});
}


const deleteBook=(uid,bid)=>{
    return userBooksModel.remove({userId:uid,bookId:bid});
}

module.exports={
    findBooksByUserId,saveBook,deleteBook
}

