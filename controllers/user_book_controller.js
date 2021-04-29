const userBooksDao = require("../daos/user_book_dao");

module.exports = (app) => {

    const findBooksByUserId=(req,res)=>{
        const userId=req.params['uid'];
        console.log(userId)
        userBooksDao.findBooksByUserId(userId)
            .then((users) => {
                res.send(users)
            })
    }

    const saveBook = (req, res) => {
        const userId=req.params['uid'];
        const bookId=req.params['bid'];
        userBooksDao.saveBook(userId,bookId)
                        .then((newSavedBook) => {
                            res.send(newSavedBook)
                        })
    }
    const deleteBook=(req,res)=>{
        const userId=req.params['uid'];
        const bookId=req.params['bid'];
        if(userId!==null && bookId!==null){
            userBooksDao.deleteBook(userId,bookId)
                .then(()=>{
                    res.send("Deleted Successfully");
                })
        }
        else{
            console.log('No such user exists');
        }
    }

    app.get("/api/userbooks/:uid", findBooksByUserId);
    app.post("/api/userbooks/create/:uid/:bid", saveBook);
    app.delete("/api/userbooks/delete/:uid/:bid", deleteBook);

}