import React, {useState, useReducer} from "react";

// useReducer is a hook that is used to manage the state of the component
const UseReducer = () => {

    const [state, setState] = useReducer((state, action) => {
        switch(action.type){
            case 'sallam':
                return "Sallam, have great day!!"
            case 'goodbye':
                return "Good Bye!";
            default:
                return state;
        }
    }
    ,"");

    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '10vh',
        }}>
            <h1>Use Reducer</h1>
            <h1>{state}</h1>
            <button onClick={() => setState({type: 'sallam'})}>Say Sallam</button>
            <button style={{marginTop: "1%"}} onClick={() => setState({type: 'goodbye'})}>Say Good Bye!</button>

        </div>
    );

}

export default React.memo(UseReducer);