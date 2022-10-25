const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const userController2=require("../controllers/userController2")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/bookUser", userController2.createbookName  )

router.get("/getBookData", userController2.getBooksName)

router.post("/userData", UserController.createUser )


router.get("/getUserData", UserController.getUsersData)


module.exports = router;