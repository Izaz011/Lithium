const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/basicUser",commonMW.middleware1, UserController.user)
module.exports = router;