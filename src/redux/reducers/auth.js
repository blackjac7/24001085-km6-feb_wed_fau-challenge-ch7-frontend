import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setToken: (state, action) => {
            if (action.payload) {
                localStorage.setItem("token", action.payload);
            } else {
                localStorage.removeItem("token");
            }
            state.token = action.payload;
        },
    },
});

export const { setUser, setToken } = authSlice.actions;

export default authSlice.reducer;
