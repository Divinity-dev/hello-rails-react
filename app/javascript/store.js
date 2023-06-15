import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./greetings";

const store = configureStore({
    reducer: {
        greetings: Reducer,
    },
});

export default store;