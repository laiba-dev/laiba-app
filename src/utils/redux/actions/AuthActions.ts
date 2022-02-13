import { Dispatch } from "react";
import { AuthResponse } from "../../services/response/AuthResponse";
import { LOGIN, LOGOUT } from "../constants/AuthConstants";

export const loginAction = (loginData: AuthResponse) => {
  return {
    type: LOGIN,
    payload: loginData,
  };
};

export const logoutAction = () => {
  return {
    type: LOGOUT,
  };
};

export const login = (loginData: AuthResponse) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(loginAction(loginData));
  };
};
