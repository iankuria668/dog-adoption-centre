import Home from "./components/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import ErrorPage from "./components/pages/ErrorPage";
import SingleDog from "./components/pages/SingleDog";

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
    },
    {
        path: "/dogs/:name",
        element: <SingleDog/>,
        errorElement: <ErrorPage />
    }
];

export default routes;