const authorModel=require("../models/newAuthorModel")
 
const createAuthor= async function(req,res){
const data=req.body
const saveData=await authorModel.create(data)
res.send({msg:saveData})
}

module.exports={createAuthor}