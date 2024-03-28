import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';
import UserProfile from "../../Components/UserProfileComponent/UserProfile";
const UsersPage = () => {

    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/users');
                setProfiles(response.data.users)

            } catch (error) {
                console.log(error)
            }
        }

        fetchData();
    }, []);

    return(
        <div
            style={{
            display: 'flex',
            marginLeft: '20vh',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>

                {profiles && (profiles.length > 0) ? (
                    profiles.map((profile, index) => {

                        return <UserProfile profilePic={profile.image} firstName={profile.firstName} lastName={profile.lastName} contact={profile.email} key={index} />
                    })
                ) : null}
            </div>
        </div>
    );
}

export default UsersPage;