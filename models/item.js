const mongoose = require('mongoose')


const itemSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    price: {
        type:String,
        required: true
    },
    sub: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('Item',itemSchema)