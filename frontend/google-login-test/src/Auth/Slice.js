import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from "uuid"

export const todoSlice = createSlice({
    name: "user",
    initialState: {
        loggedIn: false,
        profile: {}
    },
    reducers: {
        login: (state, action) => {
            state.profile = action.payload;
            state.loggedIn = true;
        },
        logout: (state, action) => {
            state.profile = null;
            state.loggedIn = false;
        }
    }
}
)

export const { login, logout } = todoSlice.actions;

export const getCurrentUser = (state) => state.user.profile;

export const isLoggedIn = (state) => state.user.loggedIn;

export default todoSlice.reducer;
