import "bootstrap/dist/css/bootstrap.min.css"; // apply bootstrap for styling
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/about";
import HomePage from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
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
	{
		path: "/login",
		element: <Login />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
