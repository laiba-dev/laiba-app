import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppState } from "../utils/redux/store";

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  let auth = useSelector((state: AppState) => state.auth);

  if (auth.api_token === undefined) {
    return <Navigate to={"/login"} />;
  }

  return auth.api_token.length !== 0 ? children : <Navigate to={"/login"} />;
}
