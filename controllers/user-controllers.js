const usersDao = require("../daos/users-dao");

module.exports = (app) => {

    /*const createUser = (req, res) => {
         const user = new usersModel(req.body);
         user.save()
             .then( user => {
                 res.send("user saved to the database");
             })
    }
*/
    const findAllUsers = (req, res) => {
        // const quizzes = quizzesService.findAllQuizzes()
        // res.send(quizzes)
        usersDao.findAllUsers()
            .then((users) => {
                res.send(users)
            })
    }

    const register = (req, res) => {
        const credentials = req.body;
        console.log("body",credentials.userName)
//        console.log("body check kar bhai username", credentials.username)
        usersDao.findUserByUsername(credentials.userName)
            .then((actualUser) => {
                console.log(actualUser.length + "Bhai actual user dekh")
//                if(actualUser !==undefined ) {
                if(actualUser.length > 0) {
                    console.log( credentials.userName + " User registered Mila bhai")
                    res.send("0")
                }else {
                    usersDao.createUser(credentials)
                        .then((newUser) => {
                        console.log({credentials} + "REgistered ke Details check kar bhai")
                            req.session['profile'] = newUser
                            res.send(newUser)
                        })
                }
            })
    }
    const login = (req, res) => {
        const credentials = req.body;
        console.log("body",credentials)
        usersDao.findUserByCredentials(credentials)
            .then((actualUser) => {
                if(actualUser) {
                    console.log("User login mai Mila bhai")
                    req.session['profile'] = actualUser
                    res.send(actualUser)
                } else {
                    res.send("0")
                }
            })
    }

    const profile = (req, res) => {
        const currentUser = req.session["profile"]
        res.send(currentUser)
    }

    const updateUser=(req,res)=>{
        const userId=req.params['uid'];
        if(userId==!null){
            usersDao.updateUser(userId)
                .then((user)=>{
                    res.send(user)
                })
        }
        else{
            alert('No such user exists');
        }

    }

    const deleteUser=(req,res) =>{
        const userId=req.params['uid'];
        if(userId==!null){
            usersDao.deleteUser(userId)
                .then(()=>{
                    res.send("Deleted Successfully");
                })
        }
        else{
            alert('No such user exists');
        }
    }
    const logout = (req, res) => {
        const credentials = req.session['profile'];
        console.log("logout body",credentials);
        /*userDao.findUserByCredentials(credentials)
                .then((actualUser) => {
                    if(actualUser) {
                        console.log("Logout hua bhai")
                        req.session['profile'] = actualUser;
                        }})*/

        if (credentials) {
            req.session.destroy();
//          res.redirect('/');
//          req.logout();
            res.clearCookie('connect.sid') // clean up!

            return res.json({ msg: 'logging you out' })
        } else {
            return res.json({ msg: 'no user to log out!' })
        }
//      req.logout();
//        req.session.destroy(function(err) {
//            req.logOut();
//            res.redirect("/");
//          });
    };

    app.get("/api/users", findAllUsers);
    app.post("/api/users/profile", profile);
    app.post("/api/users/register", register);
    app.post("/api/users/login", login);
    app.post("/api/users/logout", logout);
    app.put("/api/users/:uid/update",updateUser);
    app.delete("/api/users/:uid/delete",deleteUser);

}