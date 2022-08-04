import React, { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';

const PostDetail = () => {
    const{postId} = useParams();
    const[post,setPost] = useState({});
    useEffect( () =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data));
    },[postId]);
    return (
        <div  style={
            {
                backgroundColor: 'goldenrod',
                paddingBottom: "1rem",
                borderRadius: '15px',
                marginLeft: '15px',
                marginRight: '15px',
                marginBottom: '15px',
                // marginTop: '15px'
            }}>
            <h2>This is post detail of :{postId}</h2>
            <h3 style={{color: "white",backgroundColor: "DodgerBlue"}}>{post.title}</h3>
            <h4 style={{backgroundColor: "lightblue"}}>{post.body}</h4>
            
        </div>
       
    );
};

export default PostDetail;