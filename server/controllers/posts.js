const mongoose = require('mongoose')
const PostMessage = require('../models/postMessage')
const { post } = require('../routes/posts')


const getPosts = async  (req, res) => {
    try{
        const postMessages = await PostMessage.find()

        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const createPosts = async (req, res) => {
    const post = req.body

    const newPost = new PostMessage(post)

    try{
        await newPost.save()

        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

const updatePost = async (req, res) => {
    const { id: _id } = req.params
    const post = req.body


    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true })

    res.json(updatedPost)
}

const deletePost = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id')

    await PostMessage.findByIdAndRemove(id)

    res.json({message: 'Post deleted successfully'})
}

const likePost = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id')

    const post = await PostMessage.findById(id)

    const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: post.likeCount + 1}, {new: true})
    
    res.json(updatedPost)
}

module.exports.getPosts = getPosts
module.exports.createPosts = createPosts
module.exports.updatePost = updatePost
module.exports.deletePost = deletePost
module.exports.likePost = likePost



