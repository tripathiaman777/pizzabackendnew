var mongoose = require('mongoose')
var PaymentSchema = mongoose.Schema({
    Address: {
        type: String,
    },
    
    CardNum: {
        type  :String,
        
    },
    CVV:{
        type:Number,
    },
    createdAt: {type: Date, default: Date.now}
})
module.exports = mongoose.model('Payment',PaymentSchema)

