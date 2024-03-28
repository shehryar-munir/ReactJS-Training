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


function App() {

    const [login, setLogin] = useState(false);

    return (

        <div>

            <h1>This is main App Page</h1>
            {
                login ? (
                    <div>
                        <h1>Welcome to the App</h1>
                        <Link to={'/home'}>Home</Link>
                        <Outlet />
                    </div>
                ) : (
                    <div>
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