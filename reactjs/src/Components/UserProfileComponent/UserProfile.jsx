import React, {useEffect} from 'react';

const UserProfile = ({ profilePic, firstName, lastName, contact }) => {

    useEffect(()=>{
        console.log("Profile Pic Updated")
    },[profilePic])

    return (
        <div style={{margin:"10vh", width:"30vh"}}>
            <img src={profilePic} alt={`${firstName} ${lastName}`} className="profile-pic" />
            <h2>{`${firstName} ${lastName}`}</h2>
            <p>Contact: {contact}</p>
        </div>
    );
};

export default React.memo(UserProfile);
