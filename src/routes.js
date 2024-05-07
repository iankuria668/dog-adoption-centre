import Home from "./components/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import ErrorPage from "./components/pages/ErrorPage";

const routes = [
    {
        path: "/",
        element: <Home/>,
        errorElement: <ErrorPage />

    },

    {
        path: "/About",
        element: <About/>,
        errorElement: <ErrorPage />
    },

    {
        path: "/Contact",
        element: <Contact/>,
        errorElement: <ErrorPage />
    }
];

export default routes;