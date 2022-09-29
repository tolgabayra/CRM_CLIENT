import { Navigate, useRoutes } from 'react-router-dom';

//layouts
import DashboardLayout from "./layouts/dashboard/index"
import HomeLayout from "./layouts/home/index"
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products'
import Notfound from "./pages/Page404"
import Users from './pages/Users';
import Home from './pages/Home';
 


export default function Router(){
    return useRoutes([
        {
            path: "/dashboard",
            element: <DashboardLayout />,
            children: [
                {path: "products", element: <Products />},
                {path: "users", element: <Users />},
                {path: "home", element: <Home />},
                



            ]
        },
        {
            path: "login",
            element: <Login />
        },
        {
            path: "register",
            element: <Register />
        },
        {
            path: "/",
            children: [
                { path: '/', element: <Navigate to="/dashboard/home" /> },
                { path: '404', element: <Notfound /> },
                { path: '*', element: <Navigate to="/404" /> },
            ]
        },
        {
            path: '*',
            element: <Navigate to="/404" replace />,
        },
    ])
}