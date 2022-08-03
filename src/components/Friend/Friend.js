import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const{name,username,id,email,address} = props.user;
    const navigate = useNavigate();// create dynamic route;

    const showUserDetail = () => {
        // const path = `/friend/${id}`;// here is used carrot;
        // navigate(path);
        navigate('/friend/'+id);
    }
    return (
       <div style={{
        // borderBottom: "solid 1px",
        paddingBottom: "1rem",
        backgroundColor:"orange",
        // textColor:'white',
        borderRadius:'15px',
        marginLeft:'15px',
        marginRight:'15px',
        marginBottom:'15px'

      }}>
            <h1>{name}</h1>
            <Link style={{backgroundColor:"white",borderRadius:'15px', padding:'10px'}} to={'/friend/'+id}>ShowUserDetail</Link>
            <h2><button onClick={showUserDetail} style={{borderRadius:'15px', padding:'10px'}}>{username}:{id}</button></h2>
            <h3>{email}</h3>
            <h4>{address.city}</h4>
            <h5>{address.geo?.lat}</h5>
            <h5>{address.geo?.lng}</h5>
       </div>
    );
};

export default Friend;