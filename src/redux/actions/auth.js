import axios from "axios";
import { toast } from "react-toastify";
import { setToken, setUser } from "../reducers/auth";

export const login = (navigate, email, password) => async (dispatch) => {
    let data = JSON.stringify({
        email,
        password,
    });

    let config = {
        method: "post",
        url: `${import.meta.env.VITE_BACKEND_API}/api/auth/login`,
        headers: {
            "Content-Type": "application/json",
        },
        data,
    };

    try {
        const response = await axios.request(config);

        const { data } = response.data;
        const { token, user } = data;

        dispatch(setToken(token));
        dispatch(setUser(user));

        navigate("/chatroom");

        toast.success("Login success");
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
};

export const loginWithGoogle = (navigate, accessToken) => async (dispatch) => {
    let data = JSON.stringify({
        access_token: accessToken,
    });

    let config = {
        method: "post",
        url: `${import.meta.env.VITE_BACKEND_API}/api/auth/google-login`,
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
    };

    try {
        const response = await axios.request(config);
        // get and save the token to local storage
        const { data } = response.data;
        const { token, user } = data;

        // Change the token value in the reducer
        dispatch(setToken(token));
        dispatch(setUser(user));

        // redirect to home
        navigate("/"); // it will be not consistent, so alternative we use window until we used the state management
    } catch (error) {
        toast.error(error?.response?.data?.message);

        dispatch(logout());
    }
};

export const register =
    (navigate, name, email, password, gender, photo) => async (dispatch) => {
        let data = new FormData();
        data.append("name", name);
        data.append("email", email);
        data.append("password", password);
        data.append("gender", gender);
        if (photo) {
            data.append("photo", photo);
        }

        let config = {
            method: "post",
            url: `${import.meta.env.VITE_BACKEND_API}/api/auth/register`,
            headers: {
                "Content-Type": "multipart/form-data",
            },
            data,
        };

        try {
            const response = await axios.request(config);

            const { data } = response.data;
            const { token, user } = data;

            dispatch(setUser(user));
            dispatch(setToken(token));

            navigate("/chatroom");
            toast.success("Register success");
        } catch (error) {
            toast.error(error?.response?.data?.message);

            dispatch(logout());
        }
    };

export const updateProfile =
    (navigate, id, name, email, password, gender, photo) =>
    async (dispatch, getState) => {
        const { token } = getState().auth;

        let formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("gender", gender);
        formData.append("photo", photo);

        let config = {
            method: "put",
            maxBodyLength: Infinity,
            url: `${import.meta.env.VITE_BACKEND_API}/api/users/${id}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: formData,
        };

        try {
            await axios.request(config);

            toast.success("Profile updated successfully");
            dispatch(getProfile());
            navigate("/profile");
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };

export const getProfile =
    (navigate, successRedirect, errorRedirect) =>
    async (dispatch, getState) => {
        const { token } = getState().auth;

        if (!token) {
            // because token is not valid, we will delete it from local storage
            dispatch(logout());

            //  if there are any error redirection we will redirect it
            if (navigate) {
                if (errorRedirect) {
                    navigate(errorRedirect);
                }
            }
            return;
        }

        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `${import.meta.env.VITE_BACKEND_API}/api/auth/profile`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            const response = await axios.request(config);
            const { data } = response.data;

            dispatch(setUser(data));

            // if there are any success redirection we will redirect it
            if (navigate) {
                if (successRedirect) {
                    navigate(successRedirect);
                }
            }
        } catch (error) {
            dispatch(logout());

            //  if there are any error redirection we will redirect it
            if (navigate) {
                if (errorRedirect) {
                    navigate(errorRedirect);
                }
            }
        }
    };

export const logout = () => (dispatch) => {
    dispatch(setToken(null));
    dispatch(setUser(null));
};
