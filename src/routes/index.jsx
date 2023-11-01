import { createBrowserRouter  } from "react-router-dom";
import App from "../App";
import Contact from "../page/Contact";
import About from "../page/About";
import Login from "../page/Login";
import Register from "../page/Register";
import AdminLayout from "../components/layout/AdminLayout";
import AddService from "../page/AddService";
import Home from "../page/Home";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <h1>Error</h1>,
        children: [
            {
                index: true, // default
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/admin',
        element: <AdminLayout></AdminLayout>,
        children: [
            {
                index: true,
                element: <AddService></AddService>
            }
        ]
    }
])

export default routes;