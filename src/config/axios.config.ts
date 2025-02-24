import axios from "axios"

const baseURL = process.env.NEXT_PUBLIC_API_URL ?? "https://falcon-api.lyticaltechserver.com/api"

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
})

// Request interceptor for API calls
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("auth-token")
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Response interceptor for API calls
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    // If the error status is 401 and there is no originalRequest._retry flag,
    // it means the token has expired and we need to refresh it
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const refreshToken = localStorage.getItem("refresh-token")
        const response = await axios.post(`${baseURL}/Auth/refresh-token`, { refreshToken })
        const { token } = response.data

        localStorage.setItem("auth-token", token)

        // Retry the original request with the new token
        originalRequest.headers["Authorization"] = `Bearer ${token}`
        return axiosInstance(originalRequest)
      } catch {
        // If refresh token fails, redirect to login
        localStorage.removeItem("auth-token")
        localStorage.removeItem("refresh-token")
        window.location.href = "/login"
      }
    }

    return Promise.reject(error)
  },
)

export default axiosInstance;
