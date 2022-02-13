import React, { useEffect, useState } from "react";
import apiClient from "../../utils/services/apiClient";
import { useQuery } from "../../utils/useQuery";
import { GithubAuthResponse } from "../../utils/services/response/AuthResponse";
import { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { LOGIN } from "../../utils/redux/constants/AuthConstants";
import {
  GITHUB_ID,
  GITHUB_REDIRECT_URI,
  GITHUB_SCOPE,
  GITHUB_SECRET,
} from "../../utils/constants";

export default function AuthCallback() {
  let query = useQuery();
  const [authData, setAuthData] = useState({});

  useEffect(() => {
    let authState = query.get("state");
    let authCode = query.get("code");

    apiClient
      .post(
        `https://github.com/login/oauth/access_token?client_id=${GITHUB_ID}&client_secret=${GITHUB_SECRET}&code=${authCode}&grant_type=authorization_code&redirect_uri=${GITHUB_REDIRECT_URI}&scope=${GITHUB_SCOPE}`
      )
      .then((response: AxiosResponse<GithubAuthResponse>) => {
        setAuthData({ ...authData, accessToken: response.data.access_token });
        console.log(authData);
      });
  }, []);

  return <div></div>;
}
