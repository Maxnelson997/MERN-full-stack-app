import express from 'express';
import { addPost, getPosts, deletePost, updatePost } from '../controllers/postsController.js';
import auth from '../middleware/auth.js'

const router = express.Router();

// get all posts
router.get('/', getPosts);
// add new post
router.post('/', auth, addPost);
// delete post
router.delete('/:id', auth, deletePost);
// update post
router.put('/:id', auth, updatePost);

export { router as postRoutes }
