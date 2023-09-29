const express = require('express')
const ConnectDB = require('./Config/ConnectDB')
const userRouter = require('./Routes/User')
const marketRouter = require('./Routes/Market')
const productRouter = require('./Routes/Product')
const commentRouter = require('./Routes/Comment')
const commandeRouter = require('./Routes/Commande')
const path=require("path")


const app = express()

require('dotenv').config()

ConnectDB()

app.use(express.json())

app.use('/api/user',userRouter)
app.use('/api/market',marketRouter)
app.use('/api/product',productRouter)
app.use('/api/comment',commentRouter)
app.use('/api/commande',commandeRouter)
app.use("/api/uploads", require("./Routes/uploadRoute"));

app.use("/uploads", express.static(path.join(__dirname, "./uploads")));




app.listen(process.env.port, console.log(`Server is running on the port ${process.env.port}`))