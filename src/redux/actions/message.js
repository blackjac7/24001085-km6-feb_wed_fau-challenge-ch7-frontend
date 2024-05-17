import axios from "axios";
import { toast } from "react-toastify";
import { setMessages } from "../reducers/message";

export const getMessages = () => async (dispatch, getState) => {
    const { token } = getState().auth;

    let config = {
        method: "get",
        url: `${import.meta.env.VITE_BACKEND_API}/api/messages`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await axios.request(config);

        const { data } = response.data;
        console.log(data);

        dispatch(setMessages(data));
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
};

export const createMessage = (payload) => async (dispatch, getState) => {
    const { token } = getState().auth;

    let config = {
        method: "post",
        url: `${import.meta.env.VITE_BACKEND_API}/api/messages`,
        data: payload,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        await axios.request(config);
        dispatch(getMessages());
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
};
