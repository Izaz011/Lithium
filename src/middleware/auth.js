const userModel=require("../models/userModel")
const jwt=require("jsonwebtoken")
const objectId=require("mongodb").ObjectId


const validation=function(req,res,next){
   try{
    const token=req.headers["x-auth-token"]
    if(!token){
        return res.status(400).send({status:false,msg:"token is missing"})
    }
   
    if(!objectId.isValid(req.params.userId)){
        return res.status(400).send({status:false,msg:"user Id is not valid"})
    }


    const decodedToken=jwt.verify(token,"functionup-lithium-secret-key")
    if(decodedToken){
        if(decodedToken.userId==req.params.userId){
            next()
        }
        else{
            return res.status(403).send({status:false,msg:"token does not match"})
        }
    }
    else{
        return res.status(400).send("token is invalid")
    }}
    catch(error){
      res.status(500).send({error:error})
    }

}


module.exports={
    validation
}