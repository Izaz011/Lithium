const userModel=require("../models/userModel")

const userData=async function (req,res){
   
    const data=req.body
    const saveddata= await userModel.create(data)
    res.send({msg:saveddata})
}

module.exports={userData}
