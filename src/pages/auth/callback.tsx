import { useEffect } from "react";
import apiClient from "../../utils/services/apiClient";
import { useQuery } from "../../utils/useQuery";
import { AuthResponse } from "../../utils/services/response/AuthResponse";
import { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { loginAction } from "../../utils/redux/actions/AuthActions";
import { ApiResponse } from "../../utils/services/response/ApiResponse";
import { useNavigate } from "react-router-dom";

export default function AuthCallback() {
  let query = useQuery();
  let navigate = useNavigate();
  let dispatch = useDispatch();

  useEffect(() => {
    
    const errorQuery = query.get('error');

    
    if(errorQuery !== null) {
      navigate('/login?error=' + errorQuery);
    }

    let authState = query.get("state");
    let authCode = query.get("code");

    apiClient.get("/sanctum/csrf-cookie").then((response: AxiosResponse) => {
      apiClient
        .post(`/api/authenticate`, { state: authState, code: authCode })
        .then((response: AxiosResponse<ApiResponse<AuthResponse>>) => {
          dispatch(loginAction(response.data.data));
          navigate("/");
        })
        .catch((error) => {
          navigate("/register?username=" + error.response.data.data.username);
        });
    });
  }, [dispatch, query, navigate]);

  return <div></div>;
}
