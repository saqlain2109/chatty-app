import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://chatty-app-opal.vercel.app/api" : "/api",
  withCredentials: true,
});
