import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const{postId} = useParams();
    return (
        <div>
            <h2>This is post detail of :{postId}</h2>
        </div>
    );
};

export default PostDetail;