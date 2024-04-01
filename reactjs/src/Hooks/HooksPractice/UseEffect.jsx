import React, {useEffect, useState} from 'react';
import UserProfile from "../../Components/UserProfileComponent/UserProfile";
import axios from 'axios';
import Button from "@mui/material/Button";

// useEffect is a hook that allows us to perform side effects in function components
// useEffect is a replacement for lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount
// It runs after every render of the component
const UseEffect = () => {
    const [profiles, setProfiles] = useState([]);
    const [count, setCount] = useState(0);
    const [shouldUpdate, setShouldUpdate] = useState(false);

    // this hook will run only once when the component is mounted and will fetch the data from the api
    // and set the profiles state
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('https://dummyjson.com/users');
    //             setProfiles(response.data.users)
    //             alert("Data Fetched")
    //
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //
    //     fetchData();
    // }, []);

    // mimics component did mount and umount
    // useEffect(() => {
    //     alert("Component is mounted")
    //
    //     return() => {
    //         alert("Component is unmounted")
    //     }
    // },[])

    // mimics component did update
    // useEffect(() => {
    //     alert("Component is updated")
    // }, [count]); // if count changes, then this hook will run

    // mimics component should update
    useEffect(() => {
        setShouldUpdate(count > 5)

        // if count is greater than 5, then alert that component should update
        return () => shouldUpdate ? alert("Compnent Should update") : null
    }, [count]);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    return (
        <div
            style={{
                display: 'flex',
                marginLeft: '20vh',
            }}
        >
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>

                {profiles && (profiles.length > 0) ? (
                    profiles.map((profile, index) => {
                        return <UserProfile profilePic={profile.image} firstName={profile.firstName} lastName={profile.lastName} contact={profile.email} key={index} />
                    })
                ) : <h1> No Profiles Found</h1>}
                <Button onClick={handleIncrement}>Increament </Button>
                <h1>{count}</h1>
            </div>
        </div>
    );
}

export  default React.memo(UseEffect);