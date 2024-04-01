import React, {useState} from 'react';

// Controlled Component is a component that is controlled by the state of the component
// Controlled Component is controlled by React
const ControlledComponent = () => {


    const [input, setInput] = useState("");
    const handleChange = (e) => {
        console.log(e.target.value);
        setInput(e.target.value);
    }

    return (

        <div style={
            {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '10vh',
            }
        }>
            <h1>Controlled Component</h1>
            <input type={'text'} onChange={(e)=> handleChange(e)}/>
        </div>
    );
}

// UnControlled Component is a component that is not controlled by the state of the component i.e. React
// UnControlled Component is controlled by the DOM
const UnControlledComponent = () => {
    const inputRef = React.createRef();
    const handleClick = () => {
        console.log(inputRef.current.value);
    }
    return (
        <div style={
            {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '10vh',
            }
        }>
            <h1>UnControlled Component</h1>
            <input type={'text'} onChange={handleClick} ref={inputRef}/>
            <button style={{marginTop:"1%"}} onClick={handleClick}>Submit</button>
        </div>
    );
}

const ControlledUnControlledComponents = () => {
    return (
        <div>
            <ControlledComponent/>
            <UnControlledComponent/>
        </div>
    );
}

export default ControlledUnControlledComponents;