import { Navigate, useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';

//layouts
import DashboardLayout from "./layouts/dashboard/index"
import HomeLayout from "./layouts/home/index"
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products'
import Notfound from "./pages/Page404"
import Users from './pages/Users';
import Home from './pages/Home';
import ForgetPassword from './pages/ForgetPassword';
 
const ProtectedRoute = () => {
  const user = useSelector((state)=> state.auth.user)
  if(!user){
    return <Login />
  }
  return <DashboardLayout />
}


export default function Router(){
    return useRoutes([
        {
            path: "/dashboard",
            element: <ProtectedRoute />,
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
            path: "forget_password",
            element: <ForgetPassword />
        },
        {
            path: "/",
            children: [
                { path: '/', element: <Navigate to="/dashboard/home" /> },
                { path: '404', element: <Notfound /> },
                { path: '*', element: <Notfound /> },
            ]
        },
        {
            path: '*',
            element: <Navigate to="/404" replace />,
        },
    ])
}