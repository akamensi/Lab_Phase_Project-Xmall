const express = require('express')
const Product = require('../Models/Product')
const { addProduct, getProducts, getOneProduct, deleteProduct, updateProduct, getProductMarket } = require('../Controlles/Product')
const { isAuth } = require('../Middleware/IsAuth')


const productRouter = express.Router()

productRouter.post('/addProduct/',isAuth,addProduct)


productRouter.get('/getProducts',getProducts)


productRouter.get('/getOneProduct/:id',getOneProduct)


productRouter.delete('/deleteProduct/:id',deleteProduct)


productRouter.put('/updateProduct/:id',updateProduct)


productRouter.get('/getProductMarket/:id',getProductMarket)


module.exports = productRouter