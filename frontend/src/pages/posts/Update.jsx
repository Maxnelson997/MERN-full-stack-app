import { useContext, useState } from "react"
import { useNavigate, useLocation } from 'react-router-dom'
import { updatePost } from '../../controllers/postsController'
import Alert from '../../components/Alert'
import { PostContext } from "../../contexts/PostContext"

const Update = () => {

    const navigate = useNavigate()
    const { state } = useLocation()

    const { posts, setPosts } = useContext(PostContext)
    const [error, setError] = useState(null)

    const [title, setTitle] = useState(state.title)
    const [body, setBody] = useState(state.body)

    // Loading state
    const [loading, setLoading] = useState(false)

    const handleUpdate = async (e) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(async () => {
            try {
                const data = await updatePost({ title, body })
                setPosts([...posts, data.post])
                setLoading(false)
                navigate('/dashboard')
            } catch (error) {
                setError(error.message)
            }
        }, 1000)

    }

    return <section className='card'>
        {loading && (
            <i className="fa-solid fa-spinner animate-spin text-3xl text-center block"></i>
        )}
        <h1 className='title'>
            Update post</h1>
        <form onSubmit={handleUpdate}>
            <input
                type="text"
                placeholder="Post Title"
                className='input'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoFocus />
            <textarea
                rows="6"
                placheolder="Post Content"
                className="input"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            >
            </textarea>
            <button className="btn">Update</button>
        </form>
        {error && <Alert msg={error} />}
    </section>
}
export default Update