import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chatty-app-auhz.onrender.com/api" : "/api",
  withCredentials: true,
});
