import {useState, useEffect} from "react";
import axios from "axios";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const  fetchData = async () => {
            try {
               const response = await axios.get(url);
               setData(response.data.users);
               console.log(response.data.users)
               setIsLoaded(true);
            } catch (error) {
                setError(error);
                setIsLoaded(true);
            }
        }

        fetchData();

    }, [url]);

    return {data,error,isLoaded};
}

export default useFetch;