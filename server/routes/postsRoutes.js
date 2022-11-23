const express = require('express')
const router = express.Router()

const PostsController = require('../controllers/postsController')

router.get('/GetPosts', PostsController.getPosts)
router.post('/CreatePost', PostsController.createPost) 
router.post('/UpdatePost', PostsController.updatePost) 
router.get('/DeletePost', PostsController.deletePost) 
router.get('/SearchPosts', PostsController.searchByPostTitle)
router.get('/GetPost', PostsController.showPost) 

module.exports = router