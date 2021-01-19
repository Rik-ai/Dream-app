const express = require('express')
const posts = require('../controllers/posts')


const router = express.Router()

router.get('/', posts.getPosts)
router.post('/', posts.createPosts)
router.patch('/:id', posts.updatePost)


module.exports = router