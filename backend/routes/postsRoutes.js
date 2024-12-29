import express from 'express';
import { addPost, getPosts, deletePost, updatePost } from '../controllers/postsController.js';

const router = express.Router();

// get all posts
router.get('/', getPosts);
// add new post
router.post('/', addPost);
// delete post
router.delete('/:id', deletePost);
// update post
router.put('/:id', updatePost);

export { router as postRoutes }
