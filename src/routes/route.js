const express = require('express')
const router = express.Router()
const userController= require("../controllers/userController")
const middleware=require("../middleware/auth")

router.post('/users',userController.createUser)
router.post('/login-user',userController.loginUser)
router.get("/get-user/:userId",middleware.validation,userController.getUserData)
router.put("/update-user/:userId",middleware.validation,userController.updateUser)
router.delete("/delete-user/:userId",middleware.validation,userController.deleteUser)


module.exports = router