
const user= function(req,res){
    console.log(" the path is " + req.path)
    res.send("I am in route handler")
}

module.exports={
    user
}

