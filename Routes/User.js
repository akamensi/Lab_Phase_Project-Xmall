const express = require('express')
const { Signup, Signin, GetUsers, DeleteUser, UpdateUser, getOneUser } = require('../Controlles/User')
const { validSignUp, validation, validSignIn } = require('../Middleware/Validator')
const { isAuth } = require('../Middleware/IsAuth')
const User = require('../Models/User')

const userRouter = express.Router()

userRouter.post('/Signup',validSignUp,validation,Signup)

userRouter.post('/Signin',validSignIn,validation,Signin)

userRouter.get('/getCurrentUser',isAuth,(req,res)=>res.send(req.user))

userRouter.get('/getUsers',GetUsers)

userRouter.get('/GetOneUser/:id',getOneUser)

userRouter.delete('/deleteUser/:id',DeleteUser)

userRouter.put('/updateUser/:id',UpdateUser)

module.exports = userRouter