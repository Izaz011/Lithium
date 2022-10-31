const publisherModel = require("../models/newPublisherModel");

const createPublisher=async function(req,res){
    const data=req.body
    const saveData=await publisherModel.create(data)
    res.send(saveData)
}

module.exports={createPublisher}
