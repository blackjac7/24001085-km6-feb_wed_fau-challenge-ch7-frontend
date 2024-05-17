import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";

export default configureStore({
    devTools: true,
    reducer: reducers,
});
