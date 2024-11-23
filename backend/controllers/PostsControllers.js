const Post = require('../models/PostsModel')
const mongoose = require('mongoose')

const getPosts = async (req, res) => {
    const posts = await Post.find({}).sort({ createdAt: -1 })
    
    res.status(200).json(posts)
}

const getPost = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Post not found" })
    }
    const post = await Post.findById(id)
    if (!post) {
        res.status(404).json({ error: "Post not found" })
    }
    else {
        res.status(200).json(post)
    }
}

const CreatePost = async (req, res) => {
    const { Name, Email, Title, Issue, Location, Solution, Keywords, IsAnonymous, Caution } = req.body
    try {
        const post = await Post.create({ Name, Email, Title, Issue, Location, Solution, Keywords, IsAnonymous, Caution })
        res.status(200).json(post)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const DeletePost = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Post not found" })
    }
    const post = await Post.findOneAndDelete({_id:id})
    if (!post) {
        res.status(404).json({ error: "Post not found" })
    }
    res.status(200).json(post)
}

const UpdatePost = async(req,res)=>{
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Post not found" })
    }
    const post = await Post.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if (!post) {
        res.status(404).json({ error: "Post not found" })
    }
    res.status(200).json(post)
}

module.exports = {
    getPosts,
    getPost,
    CreatePost,
    DeletePost,
    UpdatePost
}