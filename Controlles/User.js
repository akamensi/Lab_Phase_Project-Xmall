const User = require("../Models/User")
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
const Product = require("../Models/Product")
const Market = require('../Models/Market')
const Comment = require('../Models/comment')


exports.Signup=async(req,res)=>{
    try {
        const {email,password} = req.body

        const found = await User.findOne({email})

        if(found){
            return res.status(400).send({errors : [{msg : "Email exists"}]})
        }

        const newUser = new User({...req.body, role : "client"})

        const salt = 10
        const hashedPassword = bcrypt.hashSync(password, salt);

        newUser.password = hashedPassword

        await newUser.save()


        const payload = { id : newUser._id}
        var token = jwt.sign(payload, process.env.privateKey,{ expiresIn: '5h' } );

        res.status(200).send({msg : 'Success',newUser,token})

    } catch (error) {
        res.status(500).send({errors : [{msg : "Could not signUp"}]})
    }
}




exports.Signin=async(req,res)=>{
    try {
        const {email,password} = req.body

        const found = await User.findOne({email})

        if(!found){
            return res.status(400).send({errors : [{msg : "Wrong email"}]})
        }

        const matched =  bcrypt.compareSync(password, found.password)

        if(!matched){
            return res.status(400).send({errors : [{msg : "Wrong password"}]})
        }

        const payload = { id : found._id}
        var token = jwt.sign(payload, process.env.privateKey, { expiresIn: '5h' } );

        res.status(200).send({msg : "Success", found, token})
    } catch (error) {
        res.status(500).send({errors : [{msg : "Could not signIn"}]})
    }
}


exports.GetUsers=async(req,res)=>{
    try {
        const users = await User.find()
        res.status(200).send({msg : 'User list', users})
    } catch (error) {
        res.status(500).send('Could not get Users')
    }
}


exports.getOneUser=async(req,res)=>{
    try {
        const {id} = req.params
        const user = await User.findById(id)

        res.status(200).send({Msg :'Users List',user})
    } catch (error) {
        res.status(500).send('Could not get user')
    
    }
}


exports.DeleteUser=async(req,res)=>{
    try {
        const {id} = req.params
        await Comment.deleteMany({owner : id})
        await Product.deleteMany({owner : id})
        await Market.deleteMany({owner : id})
        await User.findByIdAndDelete(id)

        res.status(200).send({msg : 'User deleted'})
    } catch (error) {
        res.status(500).send('Could not delete Users')
    }
}


exports.UpdateUser=async(req,res)=>{
    try {
        const {id} = req.params
        await User.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send({msg : 'User updated'})
    } catch (error) {
        res.status(500).send('Could not update Users')
    }
}