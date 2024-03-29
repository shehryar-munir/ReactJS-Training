import React from 'react';

const HOC = (WrappedComponent) => {
    return (props) => {
        console.log(`Rendered: ${WrappedComponent.name}`);
        return <WrappedComponent {...props} />
    }
}

export default HOC;