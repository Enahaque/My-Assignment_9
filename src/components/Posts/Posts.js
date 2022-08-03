import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {
    const[posts,setPosts] = useState([]);

    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/posts`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data))
    },[])

    return (
        <div>
            <h1>Every posts facebook ever had : {posts.length}</h1>
            {
                posts.map(post =><Link
                    key={post.id}
                    to={`/post/${post.id}`}
                    >{post.id}
                    </Link>)
            }
            <Outlet></Outlet>
        </div>
        
    );
};

export default Posts;