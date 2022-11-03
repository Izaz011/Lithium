
const orderModel=require("../models/orderModel")
const userModel=require("../models/userModel")
const productModel=require("../models/productModel")
const { ObjectId } = require("mongoose/lib/schema/index")
const ObjectID=require("mongodb").ObjectId

const orderData=async function(req,res){
    const data=req.body
    const productId=data.productId
    const userId=data.userId
   if(!ObjectID.isValid(productId)){
        return res.send({msg:"product Id is not valid"})
    }
    if(!ObjectID.isValid(userId)){
        return res.send({msg:"user id is not valid"})
    }
    const product = await productModel.findById(productId)
    const user = await userModel.findById(userId)
    let orderDetails;
    let userDetails;
    if(req.headers["isfreeappuser"]=="true"){
        orderDetails =await orderModel.create({
            "productId":productId,
            "userId":userId,
            "amount": 0,
            "date": data.date,
            "isFreeAppUser":true
           });
           return res.send({OrderDetails : orderDetails})  
    }
    else if(req.headers["isfreeappuser"]=="false"){
        if(user.balance>product.price){
            orderDetails =await orderModel.create({
                "productId":productId,
                "userId":userId,
                "amount": product.price,
                "date": data.date,
                "isFreeAppUser":false
               }) 
               userDetails = await userModel.findOneAndUpdate(
                {_id : userId},
                {$inc:{"balance":-1*(product.price)}},
                {new : true}
     
             );
             return res.send({OrderDetails : orderDetails,UserDetails :userDetails})
             }
             else{
                return res.send({Error:"User has insufficient balance"})
             }
            }
    }



module.exports={
    orderData
}