import "bootstrap/dist/css/bootstrap.min.css"; // apply bootstrap for styling
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import Login from "./pages/login";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
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
