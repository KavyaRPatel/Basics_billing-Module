var express = require("express");
const session = require("express-session");
var router = express.Router();

//login user
const credential = {
    email: "admin@gmail.com",
    password: "123"
}
router.post('/login', (req, res) => {
    if (req.body.email == credential.email && req.body.password == credential.password) {
        console.log(req.body.email);
        req.session.user = req.body.email;
        console.log(req.session);
        res.redirect('/route/dashboard');
        res.end("Login Successful")
    } else {
        res.end("Invalid Login details.")
    }
});

//route for dashboard
router.get('/dashboard', (req, res) => {
    if (req.session.user) {
        res.render('dashboard', {user:req.session.user })
    } else {
        res.send("Unauthorized User")
    }
})

router.get('/logout', (req, res) => {
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send("Error")
        }else {
            res.render('base',{title:"Express",logout:"Logout successful"})
        }
    })
    
})

module.exports = router;