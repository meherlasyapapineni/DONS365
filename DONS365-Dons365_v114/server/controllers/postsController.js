// const { response } = require('express')
const Post = require('../models/Posts')

// get all posts
const getPosts = (req, res, next) => {
    Post.find().then(response => {
        res.json({ response })
    })
    .catch(error => {
        res.json({
            message: 'an error occurred'
        })
    })
}

// create a new post
const createPost = (req, res, next) => {
    let post = new Post({
        title : req.body.title,
        description : req.body.description,
        upload_date : Date(),
    })
    // console.log("before saving")
    post.save()
    .then(response => {
        res.json({ response })
    })
    .catch(error => {
        res.json({ error })
    })
}

// update a post by id
const updatePost = (req, res, next) => {
    let postId = req.body.postId
    let updatedPostData = {
        title : req.body.title,
        description : req.body.description,
        upload_date : req.body.upload_date,
    }
    Post.findByIdAndUpdate(postId, {$set : updatedPostData})
    .then(() => {
        res.json({
            message : 'post updated successfully'
        })
    })
    .catch(error => {
        req.json({
            message : 'an error occurred'
        })
    })
}

// search for a post by title
const searchByPostTitle = (req, res, next) => {
    let title = req.params.title
    Post.find(title)
    .then({ response })
    .catch(error =>{
        req.json({
            message: 'An error occurred!'
        })
    })
}


//show the details of a post by id
const showPost = (req, res, next) => {
    let postId = req.params.postId
    Post.findById(postId)
    .then({ response })
    .catch(error =>{
        req.json({
            message: 'An error occurred!'
        })
    })
}

// delete a post by id
const deletePost = (req, res, next) => {
    let postId = req.params.postId
    Post.findOneAndDelete(postId)
    .then(() => {
        req.json({
            message : 'post deleted successfully'
        })
    })
    .catch(error =>{
        req.json({
            message: 'An error occurred!'
        })
    })
}

module.exports = {
    getPosts, createPost, updatePost, searchByPostTitle, showPost, deletePost
}
