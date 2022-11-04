const userModel=require("../models/userModel")
const jwt = require("jsonwebtoken")
const ObjectId=require("mongodb").ObjectId



const getUserValidation=function(req,res,next){
    let token = req.headers["x-auth-token"]
    const userId=req.params.userId
    if(!ObjectId.isValid(userId)){
        return res.send("No such User Exists")
      }

   if (!token) {
    return res.send({ status: false, msg: "token must be present" })
}
let decodedToken = jwt.verify(token, "functionup-lithium-secret-key")

if (decodedToken.userId!=userId){
  return res.send({ status: false, msg: "token does not match" })
}
   next()
}


module.exports={
    getUserValidation
}