import About from "./pages/about/about";
import NotFound from "./pages/errors/NotFound";
import Home from "./pages/home/home";

export const routes=[
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: '*',
        element: <NotFound />

    }



];