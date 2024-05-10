import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import Profile from "./pages/profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
