// fetch all posts

const fetchPosts = async () => {
    const res = await fetch('/api/posts/')
    const data = await res.json()

    console.log('POSTS:', data);

    if (!res.ok) {
        throw Error(data.error)
    }
    return data
}

// Fetch user posts
const fetchUserPosts = async () => {
    const res = await fetch('/api/posts/user', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    const data = await res.json()

    if (!res.ok) {
        throw Error(data.error)
    }
    return data
}

export { fetchPosts, fetchUserPosts }