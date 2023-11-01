import { createBrowserRouter  } from "react-router-dom";
import App from "../App";
import Contact from "../page/Contact";
import About from "../page/About";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    }
])

export default routes;