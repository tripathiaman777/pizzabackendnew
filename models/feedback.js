var mongoose = require('mongoose')
var feedbackSchema = mongoose.Schema({
    whichuser: {
        type: String,
    },
    female: {
        type: String,      
    },
    name: {
        type: String,
      
    },
    cardNumber: {
        type: String,
    },
    createdAt: {type: Date, default: Date.now}
})
module.exports = mongoose.model('feedback',feedbackSchema)

