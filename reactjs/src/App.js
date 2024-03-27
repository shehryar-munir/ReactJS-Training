import './App.css';
import React from "react";
import UseEffect from "./Hooks/HooksPractice/UseEffect";
import UseMemo from "./Hooks/HooksPractice/UseMemo";
import UseRef from "./Hooks/HooksPractice/UseRef";
import UseCallBack from "./Hooks/HooksPractice/UseCallBack";
import UseReducer from "./Hooks/HooksPractice/UseReducer";
import UseImperativeHandle from "./Hooks/HooksPractice/UseImperativeHandle";
import ControlledUnControlledComponents from "./Hooks/HooksPractice/ControlledUnControlledComponents";
import ClassComponent from "./Hooks/HooksPractice/ClassComponent";

function App() {

    return (
        <div>
            {/*<UseEffect/>*/}
            {/*<UseMemo/>*/}
            {/*<UseRef/>*/}
            {/*<UseCallBack/>*/}
            {/*<UseReducer/>*/}
            {/*<UseImperativeHandle/>*/}
            {/*<ClassComponent/>*/}
            <ControlledUnControlledComponents/>
        </div>
    );
}

export default React.memo(App);