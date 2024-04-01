import './App.css';
import React, {useState} from "react";
import UseEffect from "./Hooks/HooksPractice/UseEffect";
import UseMemo from "./Hooks/HooksPractice/UseMemo";
import UseRef from "./Hooks/HooksPractice/UseRef";
import UseCallBack from "./Hooks/HooksPractice/UseCallBack";
import UseReducer from "./Hooks/HooksPractice/UseReducer";
import UseImperativeHandle from "./Hooks/HooksPractice/UseImperativeHandle";
import ControlledUnControlledComponents from "./Hooks/HooksPractice/ControlledUnControlledComponents";
import ClassComponent from "./Hooks/HooksPractice/ClassComponent";
import {Outlet, Link} from "react-router-dom";
import HOC from "./Components/HOCComponent/HOC";
import Component from "./Components/HOCComponent/Component";


function App() {

    const [login, setLogin] = useState(false);

    return (

        <div  style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",

        }}>

            {
                login ? (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",

                        }}
                    >
                        <h1>Welcome to the App</h1>
                        <Link to={'/home'}>Home</Link>
                        <Outlet/>

                    </div>
                ) : (
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "50vh"
                    }}>
                        <button onClick={() => setLogin(true)}>Login</button>
                        <h1>   You are not loggedin </h1>
                    </div>
                )
            }
            {/*<UseEffect/>*/}
            {/*<UseMemo/>*/}
            {/*<UseRef/>*/}
            {/*<UseCallBack/>*/}
            {/*<UseReducer/>*/}
            {/*<UseImperativeHandle/>*/}
            {/*<ClassComponent/>*/}
            {/*<ControlledUnControlledComponents/>*/}
        </div>
    );
}

export default React.memo(App);