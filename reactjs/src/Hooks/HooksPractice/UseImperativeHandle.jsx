import React, {forwardRef, useImperativeHandle, useRef} from 'react';

// with the help of useImperativeHandle we can expose certain methods to the parent component
// and the parent component can call those methods
const UseImperativeHandle = () => {

    const childRef = useRef(null);
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '10vh',
        }}>
            <h1>Use Imperative Handle</h1>
            <Child ref={childRef}/>
            <button style={{marginTop:"1%"}} onClick={() => childRef.current.focus()}>Focus</button>
            <button style={{marginTop:"1%"}} onClick={() => childRef.current.clear()}>Clear</button>
        </div>
    );
}

const Child = forwardRef((props, ref)=>{
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
            inputRef.current.value = "Focused";
        },

        clear: () => {
            inputRef.current.value = "Cleared";
        }
    }));

    return(
        <input ref={inputRef} type="text"/>
    );
})

export default React.memo(UseImperativeHandle);

