import { createSlice } from "@reduxjs/toolkit";
import { signIn, logIn, logOut, getRefresh } from "./auth-operations";

const initialState = {
    user: {
        name: '',
        email: '',

    },
    token: null,
    isLogin: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [signIn.fulfilled]: (state, { payload }) => {
            state.token = payload.token
            state.isLogin = true
            state.user = payload.user
        },
        [logIn.fulfilled]: (state, { payload }) => {
            state.token = payload.token
            state.isLogin = true
            state.user = payload.user
        },
        [logOut.fulfilled]: (state, { payload }) => {
            state.token = null
            state.isLogin = false;
            state.user = {
                name: '',
                email: ''
            };

        },
        [getRefresh]:(state, { payload }) => {
            state.user = payload;
            state.isLogin = true;
   
        },
    }
})

export default authSlice.reducer