import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

const UserProfile = ({ profilePic, firstName, lastName, contact }) => {

    useEffect(()=>{
        console.log("Profile Pic Updated")
    },[profilePic])

    return (
        <div style={{margin:"10vh", width:"30vh"}}>
            <Link to={`/users/${contact}`}>
                <img src={profilePic} alt={`${firstName} ${lastName}`} className="profile-pic" />
                <h2>{`${firstName} ${lastName}`}</h2>
                <p>Contact: {contact}</p>
            </Link>
        </div>
    );
};

export default React.memo(UserProfile);
