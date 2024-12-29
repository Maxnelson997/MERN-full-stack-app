import express from 'express';
import { addPost, getPosts, deletePost } from '../controllers/postsController.js';

const router = express.Router();

// get all posts
router.get('/', getPosts);
// add new post
router.post('/', addPost);
// delete post
router.delete('/:id', deletePost);

export { router as postRoutes }
