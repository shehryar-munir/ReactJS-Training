import React, {useCallback, useState} from "react";

// useCallback is a hook that will memoize the function
// and will only recompute the value when any value in the dependency array changes
const useCallBack = () => {

    const [text, setText] = useState("");

    const handleChange = useCallback((e) => {
        console.log("Text Changed")
        setText(e.target.value);
    }
    ,[]);


    return(
        <div style={
            {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '10vh',
            }
        }>
            <h1>useCallBack</h1>
            <input type={'text'} onChange={handleChange}/>
            <h1>{text}</h1>

        </div>
    );
}

export default React.memo(useCallBack);