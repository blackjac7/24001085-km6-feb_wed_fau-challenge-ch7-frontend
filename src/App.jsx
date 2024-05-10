import "bootstrap/dist/css/bootstrap.min.css"; // apply bootstrap for styling
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/about";
import HomePage from "./pages/home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/about",
		element: <About />,
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
