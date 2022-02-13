import { PayloadAction } from "@reduxjs/toolkit";
import { LOGIN, LOGOUT } from "../constants/AuthConstants";
import { AuthResponse } from "../../services/response/AuthResponse";

export var authInitialState: AuthResponse = {
  access_token: "",
  api_token: "",
  avatar_url: "",
  user: {
    id: 0,
    nama: "",
    nim: "",
    prodi: "",
    username: "",
    email_verified_at: null,
    created_at: Date.prototype,
    updated_at: Date.prototype,
  },
};

var authData = window.localStorage.getItem("authReducers");
authInitialState = authData ? JSON.parse(authData) : authInitialState;

const AuthReducers = (
  state = authInitialState,
  action: PayloadAction<AuthResponse>
) => {
  switch (action.type) {
    case LOGIN:
      const authData = action.payload;
      window.localStorage.setItem("authReducers", JSON.stringify(authData));
      return authData;
    case LOGOUT:
      window.localStorage.removeItem("authReducers");
      return authInitialState;
    default:
      return state;
  }
};

export default AuthReducers;
