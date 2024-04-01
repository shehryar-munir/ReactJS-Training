import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';
import UserProfile from "../../Components/UserProfileComponent/UserProfile";
import useFetch from "../../Hooks/CustomHooks/useFetch";
import {flushSync} from "react-dom";
const UsersPage = () => {

    const { data: profiles, error: error, isLoaded:loadStatus } = useFetch('https://dummyjson.com/users');


    return (
<>
    {loadStatus ? (<div
        style={{
            display: 'flex',
            marginLeft: '20vh',
        }}>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
        }}>

            {profiles && (profiles.length > 0) && loadStatus === true ? (
                profiles.map((profile, index) => {
                    return <UserProfile profilePic={profile.image} firstName={profile.firstName}
                                        lastName={profile.lastName} contact={profile.email} key={index}/>
                })
            ) : null}
        </div>
    </div>) : (<div
        style={{
            display: 'flex',
            marginTop: "25%",
            marginLeft: '50%',
        }}>
        <h1>Loading .... </h1>
    </div>)}

</>
    );
}

export default UsersPage;