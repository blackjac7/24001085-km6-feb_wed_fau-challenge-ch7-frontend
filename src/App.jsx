import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import About from "./pages/about";
import HomePage from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";
import ChatRoom from "./pages/chatroom";
import NavbarComponent from "./components/Navbar";
import Protected from "./components/Protected";
import NonProtected from "./components/NonProtected";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <NonProtected>
                <NavbarComponent />
                <Container className="mt-5">
                    <HomePage />
                </Container>
            </NonProtected>
        ),
    },
    {
        path: "/profile",
        element: (
            <Protected>
                <NavbarComponent />
                <Container className="mt-5">
                    <Profile />
                </Container>
            </Protected>
        ),
    },
    {
        path: "/about",
        element: (
            <NonProtected>
                <NavbarComponent />
                <Container className="mt-5">
                    <About />
                </Container>
            </NonProtected>
        ),
    },
    {
        path: "/register",
        element: (
            <NonProtected>
                <NavbarComponent />
                <Container className="mt-5">
                    <Register />
                </Container>
            </NonProtected>
        ),
    },
    {
        path: "/login",
        element: (
            <NonProtected>
                <NavbarComponent />
                <Container className="mt-5">
                    <Login />
                </Container>
            </NonProtected>
        ),
    },
    {
        path: "/chatroom",
        element: (
            <Protected>
                <NavbarComponent />
                <Container className="mt-5">
                    <ChatRoom />
                </Container>
            </Protected>
        ),
    },
]);

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />;
            <ToastContainer theme="colored" />
        </Provider>
    );
}

export default App;
