import React, { useEffect, useState } from 'react';
import Friend from '../../Friend/Friend';

const Friends = () => {
    const[users,setUsers]=useState([]);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        
            .then(res => res.json())
            .then(data => setUsers(data));
    },[])
      
    return (
        <div>
            <h1>Hello friends how are you?{users.length}</h1>
            <p><small>Parle kish taka der dis</small></p>
            {
                users.map(user => <Friend
                    key={user.id}
                    user={user}
                ></Friend>)
            }
        </div>
    );
};

export default Friends;