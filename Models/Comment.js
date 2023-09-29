const mongoose = require('mongoose')


const commentSchema = mongoose.Schema({

    text : String,
    owner : {type : mongoose.Types.ObjectId, 
                ref : 'xmall' },

    product : {type : mongoose.Types.ObjectId, 
                ref : 'Xproduct'}
    


})


module.exports = mongoose.model('Xcommet', commentSchema)