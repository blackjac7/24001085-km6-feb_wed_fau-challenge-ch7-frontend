import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: [],
};

const authSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        setMessages: (state, action) => {
            state.messages = action.payload;
        },
    },
});

export const { setMessages } = authSlice.actions;

export default authSlice.reducer;
