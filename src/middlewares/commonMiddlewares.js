const headerValidation=function(req,res,next){
    if(req.headers.isfreeappuser==undefined){
        return res.send("isFreeAppUser is mandatory")
    }
    next()
}

module.exports={
    headerValidation
}