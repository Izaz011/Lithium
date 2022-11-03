const express=require("express")
const router=express.Router()


const userController=require("../controllers/userController")
const orderController=require("../controllers/orderController")
const productController=require("../controllers/productController")
const headerMiddleware=require("../middlewares/commonMiddlewares")


router.post("/create-user",headerMiddleware.headerValidation,userController.userData)
router.post("/create-product",productController.productData)
router.post("/create-order",headerMiddleware.headerValidation,orderController.orderData)
module.exports=router