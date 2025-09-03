import axiosInstance, { handleAxiosError } from "../../../config/axiosInstance";
import type { User } from "../types/usert";

export const UsersFetch = async (): Promise<User[]> => {
  try {
    const response = await axiosInstance.get<User[]>("/users");
    return response.data;
  } catch (error) {
    const handeError = handleAxiosError(error);
    throw new Error(handeError.message);
  }
};
