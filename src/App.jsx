import Container from "react-bootstrap/Container";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import store from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import { GoogleOAuthProvider } from "@react-oauth/google";
import NavbarComponent from "./components/Navbar";
import NonProtected from "./components/NonProtected";
import Protected from "./components/Protected";
import About from "./pages/about";
import ChatRoom from "./pages/chatroom";
import HomePage from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";

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
                <Container className="">
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
                <Container className="">
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
                <Container className="">
                    <ChatRoom />
                </Container>
            </Protected>
        ),
    },
]);

function App() {
    return (
        <Provider store={store}>
            <GoogleOAuthProvider
                clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
            >
                <RouterProvider router={router} />
                <ToastContainer theme="colored" />
            </GoogleOAuthProvider>
        </Provider>
    );
}
export default App;
