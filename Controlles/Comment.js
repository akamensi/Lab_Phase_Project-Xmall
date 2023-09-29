const Comment = require("../Models/comment")



exports.addComment=async(req,res)=>{
    try {
        console.log({zz : req.body,aa : req.user._id})
        const newComment = new Comment({...req.body,owner : req.user._id})
        await newComment.save()

        res.status(200).send({msg : 'Comment added',newComment})
    } catch (error) {
        res.status(500).send('Could not add a comment')
    }
}


exports.getComments=async(req,res)=>{
    try {
        const {id} = req.params
        const comments = await Comment.find({product : id}).populate('product').populate('owner')
        res.status(200).send({msg : 'List of comments',comments})
    } catch (error) {
        res.status(500).send('Could not get comments')
    }
}


exports.getOneComment=async(req,res)=>{
    try {
        const {id} = req.params
        const comment = await Comment.findById(id).populate('product').populate('owner')

        res.status(200).send({msg : 'The comment',comment})
    } catch (error) {
        res.status(500).send('Could not get comment')
    }
}


exports.deleteComment=async(req,res)=>{
    try {
        const {id} = req.params
        await  Comment.findByIdAndDelete(id)
        res.status(200).send({msg:'comment deleted'})
    } catch (error) {
        res.status(500).send('Could not delete comemnt')
    }
}


exports.updateComment=async(req,res)=>{
    try {
        const {id} = req.params
        await Comment.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send({msg:'Comment updated'})
    } catch (error) {
        res.status(500).send('Could not update Comment')
    }
}