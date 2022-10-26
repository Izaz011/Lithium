const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const bookController2=require("../controllers/bookController2")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)



router.post("/createBook2",bookController2.createBook2)

router.get("/bookList",bookController2.bookList)

router.post("/getBooksInYear",bookController2.getBooksInYear)

router.get("/getParticularBooks",bookController2.getParticularBooks)

router.get("/getINRBooks",bookController2.getXINRBooks)

router.get("/getRandomBooks",bookController2.getRandomBooks)



module.exports = router;