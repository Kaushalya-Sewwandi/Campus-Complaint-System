import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export function getApiErrorMessage(err, fallback) {
  if (err.response?.data?.message) return err.response.data.message;
  if (err.code === "ERR_NETWORK" || !err.response) {
    return "Cannot reach the server. Start the backend (port 5000) and try again.";
  }
  return fallback;
}

export default api;
