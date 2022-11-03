const productModel=require("../models/productModel")

const productData=async function(req,res){
    const data =req.body
    const savedData=await productModel.create(data)
    res.send({msg:savedData})
}


module.exports={
    productData
}