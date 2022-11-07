const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser= async function (req,res){
const data=req.body
const userData=await userModel.create(data)
res.send({msg:userData})
}






const loginUser=async function(req,res){
const userName=req.body.emailId
const password=req.body.password

if(!userName ){
  return res.send({staus:false,msg:"userName field is empty"})
}
if(!password){
  return res.send({satus:false,msg:"password field  is empty"})
}
const userData=await userModel.findOne({emailId:userName,password:password})

if(!userData){
  return res.send({status:false,msg:"user id or password is invalid"})
}
const  token=jwt.sign(
  {
    userId: userData._id.toString(),
    batch: "lithium",
    organisation: "FunctionUp",
  },"functionup-lithium-secret-key"
)
res.setHeader("x-auth-token",token)
res.send({status:true,token:token})
}






const getUserData=async function(req,res){
  const userId=req.params.userId
  const userDetails=await userModel.findById(userId)
  res.send({status:true,msg:userDetails},)

}





const updateUser = async function (req, res) {
  let userId = req.params.userId
  let userData = req.body
  let updatedUser = await userModel.findOneAndUpdate(
    { _id: userId },
     userData)
  res.send({ data: updatedUser })
}




const deleteUser=async function(req,res){
  const userId=req.params.userId
  const deletedUser=await userModel.findOneAndUpdate(
    {_id:userId},
    {$set:{isDeleted:true}}
  )
  res.send({status:true,msg:deletedUser})
}








module.exports={
  createUser,loginUser,getUserData,updateUser,deleteUser
}