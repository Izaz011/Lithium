const userModel=require("../models/userModel")
const jwt=require("jsonwebtoken")
const objectId=require("mongodb").ObjectId


const validation=function(req,res,next){
    const token=req.headers["x-auth-token"]
    if(!token){
        return res.send({status:false,msg:"token is missing"})
    }
    
    if(!objectId.isValid(req.params.userId)){
        return res.send({status:false,msg:"user Id is not valid"})
    }


    const decodedToken=jwt.verify(token,"functionup-lithium-secret-key")
    if(decodedToken){
        if(decodedToken.userId==req.params.userId){
            next()
        }
        else{
            return res.send({status:false,msg:"token does not match"})
        }
    }
    else{
        return res.send("token is invalid")
    }

}


module.exports={
    validation
}