import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "../features/getInfo/infoSlice";

const store = configureStore({
    reducer: {
        user: infoSlice,
    },
})

export default store