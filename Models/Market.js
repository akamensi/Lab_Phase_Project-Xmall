const mongoose = require('mongoose')

const marketSchema = mongoose.Schema({

    marketName : {type :String, required : true, unique : true},
    categorie : {type : String, required : true},
    marketDisc : {type : String, required : true},
    marketAdress : {type : String, required : true},
    image:{type:String},
    owner : {
        type : mongoose.Types.ObjectId,
        ref: "xmall"
    }    
})


module.exports = mongoose.model('Xmarket',marketSchema)