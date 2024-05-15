import "bootstrap/dist/css/bootstrap.min.css"; // apply bootstrap for styling
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./pages/home";
import Profile from "./pages/profile";
import About from "./pages/about";
import Register from "./pages/register";
import Login from "./pages/login";

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
  {
		path: "/login",
		element: <Login />,
	},
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
