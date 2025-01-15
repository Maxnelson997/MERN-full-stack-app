import { useContext, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { createPost } from '../../controllers/postsController'
import Alert from '../../components/Alert'
import { PostContext } from "../../contexts/PostContext"

const Create = () => {

    const { posts, setPosts } = useContext(PostContext)
    const [error, setError] = useState(null)

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const navigate = useNavigate()

    // Loading state
    const [loading, setLoading] = useState(false)

    const handleCreate = async (e) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(async () => {
            try {
                const data = await createPost({ title, body })
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
        <h1 className='title'>Create a new post</h1>
        <form onSubmit={handleCreate}>
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
            <button className="btn">Create</button>
        </form>
        {error && <Alert msg={error} />}
    </section>
}
export default Create