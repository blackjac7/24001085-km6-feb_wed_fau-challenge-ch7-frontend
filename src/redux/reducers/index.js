import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import message from "./message";

export default combineReducers({
    auth,
    message,
});
