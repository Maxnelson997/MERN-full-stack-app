import express from 'express';
import Post from '../models/PostModel.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ msg: 'Hello User' })
});

router.post('/', async (req, res) => {
    const { title, body } = req.body;
    await Post.create({ title, body })
    res.status(200).json({ msg: 'post request' })
});

export { router as postRoutes }
