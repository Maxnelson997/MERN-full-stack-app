import { useEffect, useState, useContext } from 'react';
import { fetchPosts } from "../../controllers/postsController";
import { PostContext } from "../../contexts/PostContext";
import Post from '../../components/Post';

const Home = () => {

    // Use user context
    const { posts, setPosts } = useContext(PostContext)

    // Loading state
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(async () => {
            try {
                const data = await fetchPosts()
                setPosts(data.posts)
                setLoading(false)
            } catch (error) {
                setError(error.message)
            }
        }, 1000)
    }, [])

    return <section className='card'>
        <h1 className='title'>Latest Posts</h1>
        {loading && (
            <i className="fa-solid fa-spinner animate-spin text-3xl text-center block"></i>
        )}
        <ul>
            {posts && posts.map((post) => <div key={post._id}>
                <Post post={post} />
            </div>)}
        </ul>

    </section>
}

export default Home;