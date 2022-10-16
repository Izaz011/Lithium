function printDate(){
    return new Date().getDate() 
}

function printMonth(){
    return new Date().getMonth()
}

function getBatchInfo(){
    return "Lithium, W3D5, the topic for today is Nodejs module system"
}

module.exports={
    printDate,printMonth,getBatchInfo
}
