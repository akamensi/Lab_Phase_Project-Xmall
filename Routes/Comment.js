const express = require('express')
const Comment = require('../Models/comment')
const { isAuth } = require('../Middleware/IsAuth')
const { addComment, getComments, getOneComment, deleteComment, updateComment } = require('../Controlles/Comment')

const commentRouter = express.Router()


commentRouter.post('/addComment',isAuth,addComment)


commentRouter.get('/getComments/:id',getComments)

commentRouter.get('/getOneComment/:id',getOneComment)


commentRouter.delete('/deleteComment/:id',deleteComment)


commentRouter.put('/updateComment/:id',updateComment)


module.exports = commentRouter