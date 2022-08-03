import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
const ShowUserDetail = () => {
    // const params = useParams();
    const { friendId } = useParams();// same functionality
    const [userDetail, setUserDetail] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        // console.log(url);
        fetch(url)
        
            .then(res => res.json())
            .then(data => setUserDetail(data));
    }, [])

    return (
        <div style={
            {
                backgroundColor: 'goldenrod',
                paddingBottom: "1rem",
                borderRadius: '15px',
                marginLeft: '15px',
                marginRight: '15px',
                marginBottom: '15px'
            }}>
            {/* <h2>User detail of :{params.friendId} </h2> */}
            {/* <h2>User detail of :{friendId} </h2> */}
            <h1>{userDetail.name}</h1>
            <h2>{userDetail.username}</h2>
            <h3>{userDetail.email}</h3>
            <h4>{userDetail.address?.city}</h4>
            <h5>{userDetail.address?.geo?.lat}</h5>
            <h6>{userDetail.address?.geo?.lng}</h6>


        </div>
    );
};

export default ShowUserDetail;