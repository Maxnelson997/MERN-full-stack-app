import express from 'express';
import Post from '../models/PostModel.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ msg: 'Hello User' })
});

router.post('/', async (req, res) => {
    // Grab the data from requests body.
    const { title, body } = req.body;

    // Check the fields are not empty.
    if (!title || !body) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        const post = await Post.create({ title, body })
        res.status(200).json({ success: 'post request', post })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});

export { router as postRoutes }
