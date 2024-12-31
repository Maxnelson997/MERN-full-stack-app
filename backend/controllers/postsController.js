import Post from '../models/PostModel.js';
import mongoose from "mongoose";

// https://programming.earthonline.us/can-you-answer-this-senior-level-javascript-promise-interview-question-69f7b6ffc2e7

// ****get all posts**** //
const getPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        res.status(200).json({ success: 'posts fetched', posts })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// ****create new post**** //
const addPost = async (req, res) => {
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
}

// ****delete post with id**** //
const deletePost = async (req, res) => {
    // Check if the ID in the params is valid
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ error: 'Invalid Post ID Param' });
    }

    // Check if the post exists
    const post = await Post.findById(req.params.id)
    if (!post) {
        return res.status(400).json({ error: 'Post not found' });
    }

    try {
        await post.deleteOne()
        res.status(200).json({ success: 'Post succesfully deleted', post })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// ****update post with id**** //
const updatePost = async (req, res) => {
    // Grab the data from requests body.
    const { title, body } = req.body;

    // Check the fields are not empty.
    if (!title || !body) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    // Check if the ID in the params is valid
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ error: 'Invalid Post ID Param' });
    }

    // Check if the post exists
    const post = await Post.findById(req.params.id)
    if (!post) {
        return res.status(400).json({ error: 'Post not found' });
    }

    try {
        await post.updateOne({ title, body })
        res.status(200).json({ success: "Post was updated" })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }


}

export { getPosts, addPost, deletePost, updatePost };