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
import Protected from "./components/Protected";
import NonProtected from "./components/NonProtected";
import { GoogleOAuthProvider } from "@react-oauth/google";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <NonProtected>
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
