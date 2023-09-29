const express = require('express')
const Commande = require('../Models/Commande')
const { isAuth } = require('../Middleware/IsAuth')
const { Command } = require('concurrently')

const commandeRouter = express.Router()

commandeRouter.post('/addCommande',isAuth,async(req,res)=>{
    try {     
        const newCommande = new Commande({...req.body,owner : req.user._id,status : 'In progress...'})
        await newCommande.save()

        res.status(200).send({msg : 'Comment added',newCommande})
    } catch (error) {
        res.status(500).send('Could not add a comment')
    }
})


commandeRouter.get('/getCommandesProduct/:id',async(req,res)=>{
    // id (vendeur)
    try {
        const {id} = req.params
        const commandes = await Commande.find({ownerProduct : id}).populate('product').populate('owner').populate('ownerProduct')
        res.status(200).send({msg : 'List of comments',commandes})
    } catch (error) {
        res.status(500).send('Could not get comments')
    }
})

commandeRouter.get('/getMyCommandes/:id',async(req,res)=>{
    // id (Acheteur)
    try {
        const {id} = req.params
        const commandes = await Commande.find({owner : id}).populate('product').populate('owner').populate('ownerProduct')
        res.status(200).send({msg : 'List of comments',commandes})
    } catch (error) {
        res.status(500).send('Could not get comments')
    }
})





commandeRouter.delete('/deleteCommande/:id',async(req,res)=>{
    try {
        const {id} = req.params
        await  Commande.findByIdAndDelete(id)
        res.status(200).send({msg:'comment deleted'})
    } catch (error) {
        res.status(500).send('Could not delete comemnt')
    }
})


commandeRouter.put('/updateCommande/:id',async(req,res)=>{
    try {
        const {id} = req.params
        await Commande.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send({msg:'Comment updated'})
    } catch (error) {
        res.status(500).send('Could not update Comment')
    }
})



module.exports = commandeRouter