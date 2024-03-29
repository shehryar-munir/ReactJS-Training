import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import ProductCardPage from "../Pages/Products/ProductCardPage";
import UsersPage from "../Pages/Users/UsersPage";
import Parent from "../Components/Parent/Parent";
import React from "react";
import Signup from "../Pages/Signup/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/home',
                element: <Home/>,
            }
        ]
    },

    {
        path: '/product-card-page',
        element: <ProductCardPage/>,
    },

    {
        path: '/users',
        element: <UsersPage/>,
    },

    {
        path: '/users/:id',
        element: <UsersPage/>,
    },

    {
        path: '/parent',
        element: <Parent/>,
    },
    {
        path:'/signup',
        element: <Signup/>
    }

]);

export default router;