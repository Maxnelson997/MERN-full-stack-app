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

export { fetchPosts }