import React from 'react';

export default class ClassComponent extends React.Component{

    constructor() {
        super();
        this.state = {
            name: "Class Component"
        }
    }

    updateName = () => {
        this.setState({
            name: "Updated Class Component"
        })
    }

    render() {
        return (
            <div style={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '10vh',
                }
            }>
                <h1>{this.state.name}</h1>
                <button style={{marginTop:"1%"}} onClick={this.updateName}>Update Name</button>
            </div>
        );
    }

}