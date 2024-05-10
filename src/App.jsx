import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import About from "./pages/about";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/about",
        element: <About />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
