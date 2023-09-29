const mongoose = require('mongoose')


const userSchema = new mongoose.Schema(
    {
        name : String,
        lastname : String,
        age : Number,
        adress : String,
        email : {type : String,unique : true, required : true},
        password : {type : String,required : true},
        role : String,
        image:String
    }
)


module.exports = mongoose.model('xmall',userSchema)