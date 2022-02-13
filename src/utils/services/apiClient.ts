import axios from "axios";
import { API_URL } from "../constants";
import Cookies from "js-cookie";

const apiClient = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default apiClient;
