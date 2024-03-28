import React from 'react';

const Child = ({componentFromParent}) => {
    return (
        <div>
            <h1>This is Child Component</h1>
            {componentFromParent}
        </div>
    )
}

export default Child