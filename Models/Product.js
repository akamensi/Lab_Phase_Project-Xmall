const mongoose = require('mongoose')


const productSchema = mongoose.Schema({
    name : {type : String, required : true},
    description : {type : String, required : true },
    price : {type : Number, required : true},
    owner : {type : mongoose.Types.ObjectId, ref : 'xmall' },
    market : {type : mongoose.Types.ObjectId ,ref : "Xmarket"},
    image:String


})


module.exports = mongoose.model('Xproduct', productSchema)