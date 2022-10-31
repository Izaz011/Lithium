const mid1=function(req,res,next){
    console.log("hi I am in mid1")
    next()
}

module.exports=mid1