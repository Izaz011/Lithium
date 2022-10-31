const express = require('express');
const router = express.Router();

// const authorController= require("../controllers/authorController")
// const bookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
















const newAuthorController=require("../controllers/newAuthorController")
const newPublisherController=require("../controllers/newPublisherController")
const newBookController=require("../controllers/newBookController")


router.post("/createNewAuthor",newAuthorController.createAuthor)
router.post("/createNewPublisher",newPublisherController.createPublisher)
router.post("/createNewBook",newBookController.createBook)
router.get("/getAllBooks",newBookController.getBook)
router.put("/updateBook",newBookController.updateBooks)
router.put("/updatePrice",newBookController.updatePrice)






module.exports = router;