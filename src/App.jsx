import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import Profile from "./pages/profile";
import About from "./pages/about";
import Register from "./pages/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
