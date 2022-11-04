const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const validationMiddleware=require("../middlwares/auth")


router.post("/users", userController.registerUser  )

router.post("/login", userController.loginUser)

router.get("/users/:userId",validationMiddleware.getUserValidation, userController.getUserData)

router.put("/users/:userId",validationMiddleware.getUserValidation, userController.updateUser)

router.delete("/users/:userId",validationMiddleware.getUserValidation, userController.deleteUser)

module.exports = router;