const mongoose = require('mongoose')


const commandeSchema = new mongoose.Schema(
    {
        prixTotal : Number,
        qte : Number,
        owner : {type : mongoose.Types.ObjectId, ref : 'xmall' },
        ownerProduct : {type : mongoose.Types.ObjectId, ref : 'xmall' },
        product : {type : mongoose.Types.ObjectId, ref : 'Xproduct'},
        status : String
    }
)


module.exports = mongoose.model('xcommande',commandeSchema)