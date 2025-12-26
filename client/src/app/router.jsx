import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import LoginPage from "../modules/auth/LoginPage";
import RegisterPage from "../modules/auth/RegisterPage";
import DashboardHome from "../modules/dashboard/DashboardHome";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {path:"/",element:<DashboardHome/>},
        ],
    },
    {
        path:"/auth",
        element:<AuthLayout/>,
        children:[
            {path: "login",element: <LoginPage/>},
            {path: "register", element: <RegisterPage/>},
        ],
    },
]);

export default router;