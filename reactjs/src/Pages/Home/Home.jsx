import React from 'react';
import {Outlet, Link} from "react-router-dom";

const Home = ({login}) => {
    return (
        <div>
            <h1>This is Home Page</h1>

            <div>
                <li>
                    <Link to={'/product-card-page'}>ProductCardPage</Link>
                </li>

                <li>
                    <Link to={'/users'}>Users</Link>
                </li>

                <li>
                    <Link to={'/parent'}>Render Props</Link>
                </li>

            </div>
        </div>
    );
}

export default Home;