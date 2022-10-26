import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../pages/Blog/Blog";
import Category from "../pages/Category/Category";
import CheckMePages from "../pages/CheckMePages/CheckMePages";
import Courses from "../pages/Courses/Courses";
import CoursesDetails from "../pages/CoursesDetails/CoursesDetails";
import Error from "../pages/Error/Error";
import Faq from "../pages/Faq/Faq";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivetRoute from "./PrivetRoute/PrivetRoute";

export const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
        {
            path: '/courses',
            element: <Courses></Courses>,
            loader: () => fetch('http://localhost:5000/programing-category')
        },
        {
        path: '/tutorials/:id',
        element: <CoursesDetails></CoursesDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/tutorials/${params.id}`)
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
        },
        {
            path: '/category/:id',
            element: <Category></Category>,
            loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
        },
        {
            path: '/check_page',
            element: <PrivetRoute><CheckMePages></CheckMePages></PrivetRoute>
        }
    ]}

])