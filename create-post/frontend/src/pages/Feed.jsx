import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Feed = () => {

    const [posts, setPosts] = useState([
        // {
        //     _id: 1,
        //     image: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        //     caption: 'Beautiful sunset!',
        // }
    ])

    useEffect(() => {
        axios.get('http://localhost:3000/posts')
            .then((res) => {
                setPosts(res.data.posts);
                console.log(res.data.posts)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <section className='feed-sec'>
            {
                posts.map(post => (
                    <div key={post._id} className='post'>
                        <img src={post.image} alt={post.caption} />
                        <p>{post.caption}</p>
                    </div>
                ))
            }
        </section>
    )
}

export default Feed