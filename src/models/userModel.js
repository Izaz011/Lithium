const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( 
    {
    firstName : String,
    lastName : String,
    mobile : Number,
    emailId : {
        type:String,
        required:true,
        unique:true
    },
    password : {
        type:String,
        required:true
    },
    gender :{
        type:String,
        enum:["male","female","other"]
    } ,
	isDeleted: {
        type:Boolean,
        default:false
    }, 
    age : Number,
},{
    timestamps:true
})

module.exports = mongoose.model('UserIdList', userSchema)
