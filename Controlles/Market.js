const Market = require("../Models/Market")
const Product = require("../Models/Product")
const Comment = require("../Models/comment")


exports.addMarket=async(req,res)=>{
    try {
        
        // req.user._id
        const found = await Market.findOne({marketName : req.body.marketName})
        if(found){
            return res.status(400).send("This name is already taken")
        }
        const newMarket = new Market({...req.body,owner : req.user._id})
        newMarket.save()

        res.status(200).send({msg : 'Market added', newMarket})
    } catch (error) {
        res.status(500).send({msg:'Could not add market'})
    }
}


exports.getMarket=async(req,res)=>{
    try {
        const markets = await Market.find().populate('owner')
        res.status(200).send({msg : 'List of markets', markets})
    } catch (error) {
        res.status(500).send({msg:'Could not get markets'})
    }
}

exports.getOneMarket=async(req,res)=>{
    try {
        const {id} = req.params
        const market = await Market.findById(id).populate('owner')

        res.status(200).send({msg : 'The market', market})
    } catch (error) {
        res.status(500).send({msg:'Could not get market'})
    }
}

exports.deleteMarket=async(req,res)=>{
    try {
        const {id} = req.params
        await Comment.deleteMany({product : id})
        await Product.deleteMany({market : id})
        await Market.findByIdAndDelete(id)
        res.status(200).send({msg : 'Market deleted'})
    } catch (error) {
        res.status(500).send({msg:'Could not delete market'})
    }
}

exports.updateMarket=async(req,res)=>{
    try {
        const {id}  = req.params
        await Market.findByIdAndUpdate(id,{$set :req.body})
        res.status(200).send({msg : 'Market updated'})
    } catch (error) {
        res.status(500).send({msg:'Could not update market'})
    }
}


exports.getMaketUser=async(req,res)=>{
    try {
        const {id} = req.params
        const marketUser = await Market.find({owner : id}).populate('owner')
        res.status(200).send({msg : 'Marketuser', marketUser})
    } catch (error) {
        res.status(500).send({msg:'Could not get market user'})
    }
}