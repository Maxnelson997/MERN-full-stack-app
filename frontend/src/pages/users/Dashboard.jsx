import { useEffect, useContext, useState } from 'react'
import { fetchUserPosts } from "../../controllers/postsController"
import { UserContext } from '../../contexts/UserContext'
import Post from '../../components/Post'
import { Link } from 'react-router-dom'
import { deletePost } from '../../controllers/postsController'
import Alert from "../../components/Alert"
import Success from "../../components/Success"

const Dashboard = () => {

    // Use user context
    const { user, setUser } = useContext(UserContext)

    // Loading state
    const [loading, setLoading] = useState(true)

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        setTimeout(async () => {
            setLoading(true)
            try {
                const data = await fetchUserPosts()
                const { posts } = data

                setUser({ ...user, posts })

                // setUser({ ...user, posts })
                setLoading(false)
            } catch (error) {
                // setError(error.message)
                console.log("error:", error.message)
            }
        }, 1000)
    }, [])

    const handleDelete = async (_id) => {
        setLoading(true)
        try {
            const data = await deletePost(_id)
            const newPosts = user.posts.filter(post => post._id !== _id)
            setLoading(false)
            setSuccess(data.success)
            setUser({ ...user, posts: newPosts })
        } catch (error) {
            setError(error.message)
            // console.log("error:", error.message)
        }
    }


    return (
        <section className="card">
            <p>{user.email}</p>
            <h1 className="title">User Dashboard</h1>

            {success && <Success msg={success} />}
            {error && <Alert msg={error} />}
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

export default Dashboard