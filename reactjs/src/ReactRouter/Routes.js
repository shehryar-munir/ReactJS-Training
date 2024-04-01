import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import ProductCardPage from "../Pages/Products/ProductCardPage";
import UsersPage from "../Pages/Users/UsersPage";
import Parent from "../Components/ParentComponent/Parent";
import React from "react";
import Signup from "../Pages/Signup/Signup";
import UseFormik from "../Hooks/HooksPractice/UseFormik";
import HOC from "../Components/HOCComponent/HOC";
import Component from "../Components/HOCComponent/Component";
import FormikComponent from "../Components/FormikComponent/FormikComponent";
import UseForm from "../Hooks/HooksPractice/UseForm";

const HOCUsage = HOC(Component)
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
    },
    {
        path:"/use-formik",
        element: <UseFormik/>
    },
    {
        path:"/hoc-usage",
        element: <HOCUsage name={"Burak"}/>
    },
    {
        path:'/formik-component',
        element: <FormikComponent/>
    },
    {
        path:"/use-form-react-hook",
        element: <UseForm/>
    }

]);

export default router;