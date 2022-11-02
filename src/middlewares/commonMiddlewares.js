const middleware1=function(req,res,next){
    console.log(new Date())
    console.log(req.url)
    next()
}

module.exports={
    middleware1
}