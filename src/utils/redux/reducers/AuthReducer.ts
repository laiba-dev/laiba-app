import { PayloadAction } from "@reduxjs/toolkit";
import { LOGIN, LOGOUT } from "../constants/AuthConstants";
import { AuthStateData } from "../constants/AuthState";

const initialState: AuthStateData = {
  id: 0,
  nama: "",
  nim: "",
  prodi: "",
  username: "",
  created_at: Date.prototype,
  email_verified_at: null,
  updated_at: Date.prototype,
  apiToken: "",
  ghAccessToken: "",
};

const MenuReducer = (
  state = initialState,
  action: PayloadAction<AuthStateData>
) => {
  switch (action.type) {
    case LOGIN:
      const authData = action.payload;
      localStorage.setItem("authReducers", JSON.stringify(authData));
      return authData;
    case LOGOUT:
      localStorage.removeItem("authReducers");
      return initialState;
    default:
      return state;
  }
};

export default MenuReducer;
