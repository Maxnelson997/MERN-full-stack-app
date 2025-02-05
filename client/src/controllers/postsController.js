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
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    const data = await res.json()

    if (!res.ok) {
        throw Error(data.error)
    }
    return data
}

// create post 
const createPost = async ({ title, body }) => {
    if (!title || !body) {
        throw Error("All fields are required");
    }

    const res = await fetch('/api/posts/', {
        method: "POST",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, body }),
    })

    const data = await res.json()

    if (!res.ok) {
        throw Error(data.error)
    }
    return data
}

// delete post
const deletePost = async (_id) => {
    const res = await fetch(`/api/posts/${_id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    })
    const data = await res.json()

    if (!res.ok) {
        throw Error(data.error)
    }
    return data
}

// delete post
const updatePost = async (_id, title, body) => {
    if (!title || !body) {
        throw Error("All fields are required");
    }

    const res = await fetch(`/api/posts/${_id}`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, body }),
    })
    const data = await res.json()

    if (!res.ok) {
        throw Error(data.error)
    }
    return data
}

export { fetchPosts, fetchUserPosts, createPost, deletePost, updatePost }