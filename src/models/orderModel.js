const mongoose = require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
	userId: {
        type:ObjectId,
        required:true,
        ref:"NewUser"
    },
	productId:{
        type:ObjectId,
        required:true,
        ref:"Product"
    },
	amount: Number,
	isFreeAppUser: Boolean, 
	date:Date
}
)

module.exports = mongoose.model('Order', orderSchema)
