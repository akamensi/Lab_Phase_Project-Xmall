const Product = require("../Models/Product")
const Comment = require("../Models/comment")


exports.addProduct=async(req,res)=>{
    try {
      //  const {id} = req.params
        const newProduct = new Product({...req.body,owner : req.user._id})
        await newProduct.save()

        res.status(200).send({msg : 'product added',newProduct})
    } catch (error) {
        res.status(500).send('Could not add product')
    }
}

exports.getProducts=async(req,res)=>{
    try {
        const products = await Product.find().populate('market').populate('owner')
        res.status(200).send({msg : 'List of products',products})
    } catch (error) {
        res.status(500).send('Could not get porducts ')
    }
}

exports.getOneProduct=async(req,res)=>{
    try {
        const {id} = req.params
        const product = await Product.findById(id).populate('market').populate('owner')

        res.status(200).send({msg : 'The product',product})
    } catch (error) {
        res.status(500).send('Could not get product')
    }
}

exports.deleteProduct=async(req,res)=>{
    try {
        const {id} = req.params
        await Comment.findMany({product : id})
        await  Product.findByIdAndDelete(id)
        res.status(200).send({msg:'Product deleted'})
    } catch (error) {
        res.status(500).send('Could not get product')
    }
}

exports.updateProduct=async(req,res)=>{
    try {
        const {id} = req.params
        await Product.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send({msg:'Product updated'})
    } catch (error) {
        res.status(500).send('Could not update product')
    }
}

exports.getProductMarket=async(req,res)=>{
    try {
        const {id} = req.params
        const productMarket = await Product.find({market : id}).populate('owner').populate('market')
        res.status(200).send({msg : 'ProductMarket', productMarket})
    } catch (error) {
        res.status(500).send({msg:'Could not get product market'})
    }
}