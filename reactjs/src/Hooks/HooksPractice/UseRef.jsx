import React, {useEffect, useRef} from 'react';

// with the help of useRef we can keep reference to the DOM element
// and change its properties
const UseRef = () => {

    const headingRef = useRef(null);
    const inputRef = useRef(null);

    // we will keep reference to the heading element and change its innerHTML
    useEffect(() => {
        console.log(headingRef.current);
        // headingRef.current.innerHTML = "Salaam Dun-ya"
        inputRef.current.focus();
    }, []);

    const handleClick = () => {
        headingRef.current.innerHTML = "Change using use ref"
    }


    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '10vh',
        }}>
            <h1 ref={headingRef}>Use Ref</h1>
            <button onClick={handleClick}>change </button>
            <input ref={inputRef} type="text"/>
        </div>
    );
}

export default React.memo(UseRef);