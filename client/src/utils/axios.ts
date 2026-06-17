import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:3000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  
  withCredentials: true,
  timeout: 15000,
});

// Centralised handling for an expired/invalid session.
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response?.status === 401 &&
      window.location.pathname !== "/login"
    ) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default apiClient;
