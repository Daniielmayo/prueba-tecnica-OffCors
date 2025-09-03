import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export const handleAxiosError = (error: unknown | string) => {
  if (axios.isAxiosError(error)) {
    return {
      message: error.response?.data?.message ?? "Error en la petición",
      status: error.response?.status,
      data: error.response?.data,
    };
  }
  return {
    message: "Error inesperado",
    status: 500,
    data: null,
  };
};

export default axiosInstance;
