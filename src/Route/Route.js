import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Courses/Courses";
import Error from "../pages/Error/Error";
import Faq from "../pages/Faq/Faq";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

export const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
        {
        path: '/',
        element: <Courses></Courses>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/faq',
            element: <Faq></Faq>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        }
    ]}

])