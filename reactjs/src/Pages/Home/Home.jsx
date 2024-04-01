import React from 'react';
import {Outlet, Link} from "react-router-dom";
import HOC from "../../Components/HOCComponent/HOC";
import Component from "../../Components/HOCComponent/Component";

const Home = ({login}) => {
    const HOCUsage = HOC(Component)
    return (
        <div
            style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
            }}
        >
            <h1>This is Home Page</h1>

            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <li style={{marginRight: "10vh"}}>
                    <Link to={'/product-card-page'}>ProductCardPage</Link>
                </li>

                <li style={{marginRight: "10vh"}}>
                    <Link to={'/users'}>Users</Link>
                </li>

                <li style={{marginRight: "10vh"}}>
                    <Link to={'/parent'}>Render Props</Link>
                </li>

                <li style={{marginRight: "10vh"}}>
                    <Link to={'/signup'}>Signup</Link>
                </li>

                <li style={{marginRight: "10vh"}}>
                    <Link to={'/use-formik'}>Use Formik</Link>
                </li>

                <li style={{marginRight: "10vh"}}>
                    <Link to={'/hoc-usage'}>HOC</Link>
                </li>

                <li style={{marginRight: "10vh"}}>
                    <Link to={'/formik-component'}>Formik Component</Link>
                </li>

                <li style={{marginRight: "10vh"}}>
                    <Link to={'/use-form-react-hook'}>Use Form React Hook</Link>
                </li>


            </div>
        </div>
    );
}

export default Home;