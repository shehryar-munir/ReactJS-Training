import React from 'react'
import Child from "../ChildComponent/Child";

const componentFromParent = () => {
    return (
        <div>
            <h1>This is Component from Parent</h1>
        </div>
    )

}

const Parent = () => {
    return (
        <div>
            <h1>This is Parent Component</h1>
            <Child componentFromParent={componentFromParent()}/>
        </div>
    )
}

export default Parent