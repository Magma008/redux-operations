import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    value: [],
}

const url = "https://68eb4fa276b3362414cd5222.mockapi.io/users"

export const infoSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.value = [action.payload]
            axios.post(url, state.value[0])
            
        },
        deleteUser: (state, action) => {
            axios.delete(`${url}/${action.payload}`)
            console.log(action.payload);
            
        }
    }
})

export const { addUser, deleteUser } = infoSlice.actions

export default infoSlice.reducer