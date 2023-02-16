import { PayloadAction } from "@reduxjs/toolkit";
import { LOGIN, LOGOUT } from "../constants/AuthConstants";
import { AuthResponse } from "../../services/response/AuthResponse";

export var authInitialState: AuthResponse = {};

var authData = window.localStorage.getItem("authReducers");
authInitialState = authData ? JSON.parse(authData) : authInitialState;

const AuthReducers = (
    state = authInitialState,
    action: PayloadAction<AuthResponse>
) => {
    switch (action.type) {
        case LOGIN:
            const authData = action.payload;
            window.localStorage.setItem(
                "authReducers",
                JSON.stringify(authData)
            );
            return authData;
        case LOGOUT:
            window.localStorage.removeItem("authReducers");
            return authInitialState;
        default:
            return state;
    }
};

export default AuthReducers;
