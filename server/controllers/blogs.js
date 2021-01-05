const express = require('express');
const router = express.Router();

const Blog = require('../models/blog')

// Create blog route
router.post('/', async (req, res) => {
    try {
        const blog = await Blog.create(req.body.title, req.body.author, req.body.content);
        res.json(blog);
    } catch (error) {
        res.status(404).json({error})
    }
});

// Blog show route
router.get('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(parseInt(req.params.id));
        res.json(blog);
    } catch (error) {
        res.status(404).json({error})
    }
});

module.exports = router;