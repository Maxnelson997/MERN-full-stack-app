import { useEffect, useState, useContext } from 'react';
import { fetchPosts } from "../../controllers/postsController";
import { PostContext } from "../../contexts/PostContext";
import Post from '../../components/Post';

const Home = () => {

    // Use user context
    const { posts, setPosts } = useContext(PostContext)

    useEffect(() => {
        setTimeout(async () => {
            try {
                const data = await fetchPosts()
                setPosts(data.posts)
            } catch (error) {
                setError(error.message)
            }
        }, 500)
    }, [])

    return <section className='card'>
        <h1 className='title'>Latest Posts</h1>

        <div>posts</div>
        <ul>
            {posts && posts.map((post) => <div key={post._id}>
                <Post post={post} />
            </div>)}
        </ul>

    </section>
}

export default Home;