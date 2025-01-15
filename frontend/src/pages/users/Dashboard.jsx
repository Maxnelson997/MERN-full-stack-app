import { useEffect, useContext, useState } from 'react';
import { fetchUserPosts } from "../../controllers/postsController";
import { UserContext } from '../../contexts/UserContext';
import Post from '../../components/Post';
import { Link } from 'react-router-dom';

const Dashboard = () => {

    // Use user context
    const { user, setUser } = useContext(UserContext)

    // Loading state
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(async () => {
            try {
                const data = await fetchUserPosts()
                const { posts } = data;

                setUser({ ...user, posts })

                // setUser({ ...user, posts })
                setLoading(false)
            } catch (error) {
                // setError(error.message)
                console.log("error:", error.message)
            }
        }, 1000)
    }, [])

    const handleDelete = (id) => {

    }


    return (
        <section className="card">
            <p>{user.email}</p>
            <h1 className="title">User Dashboard</h1>
            {loading && (
                <i className="fa-solid fa-spinner animate-spin text-3xl text-center block"></i>
            )}

            {user.posts && user.posts.map(post => {
                return <div key={post._id}>
                    <Post post={post}>
                        <div className="flex items-center gap-2">
                            <Link
                                title="Update"
                                to="/update"
                                className="fa-solid fa-pen-to-square nav-link text-green-500 hover:bg-green-200"></Link>
                            <button
                                title="Delete"
                                onClick={() => handleDelete(post._id)}
                                className="fa-solid fa-trash-can nav-link text-red-500 hover:bg-red-200"></button>
                        </div>
                    </Post>
                </div>
            })}
        </section>
    )
}

export default Dashboard;