const express = require('express')
const router = express.Router()
const {getPosts, getPost, CreatePost, DeletePost, UpdatePost} = require('../controllers/PostsControllers')
router.get('/', (req, res) => {
    console.log('GET /api/routes');
    getPosts(req, res);
});
router.get('/:id',getPost)
router.post('/',CreatePost)
router.delete('/:id',DeletePost)
router.patch('/:id',UpdatePost)

module.exports = router