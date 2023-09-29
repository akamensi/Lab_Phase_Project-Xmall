const express = require('express')
const { addMarket, getMarket, getOneMarket, deleteMarket, updateMarket, getMaketUser } = require('../Controlles/Market')
const Market = require('../Models/Market')
const { isAuth } = require('../Middleware/IsAuth')

const marketRouter = express.Router()

marketRouter.post('/addMarket',isAuth,addMarket)

marketRouter.get('/getMarkets',getMarket)


marketRouter.get('/getOneMarket/:id',getOneMarket)


marketRouter.delete('/deleteMarket/:id',deleteMarket)


marketRouter.put('/updateMarket/:id',updateMarket)


marketRouter.get('/getMarketUser/:id',getMaketUser)


module.exports = marketRouter