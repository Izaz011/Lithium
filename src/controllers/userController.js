const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")

const registerUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data)
  res.send({ msg: savedData })
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId
let password = req.body.password
let user = await userModel.findOne({ emailId: userName, password: password })
if (!user){
  return res.send({
    status: false,
    msg: "username or the password is not corerct",
  })
}

let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "lithium",
      organisation: "FunctionUp",
    },
    "functionup-lithium-secret-key"
  );
  res.setHeader("x-auth-token", token)
  res.send({ status: true, token: token })
}










const getUserData = async function (req, res) {

 let userId = req.params.userId

let userDetails = await userModel.findById(userId)
res.send({ status: true, data: userDetails })
}







const updateUser = async function (req, res) {
  let userId = req.params.userId

   let userData = req.body
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData)
  res.send({ data: updatedUser })
};









const deleteUser=async function(req,res){

  let userId=req.params.userId

  const deleteKey=req.body
  let deletedUser=await userModel.findOneAndUpdate({ _id: userId }, deleteKey)
res.send({data:deletedUser})
}

module.exports = {
  registerUser,getUserData,updateUser,loginUser,deleteUser
}
