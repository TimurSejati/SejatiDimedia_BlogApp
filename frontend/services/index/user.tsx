import axios, { AxiosInstance } from "axios";

const baseURL = process.env.baseURL || "http://localhost:5000";

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
});
export const signup = async ({ name, email, password }: any) => {
  try {
    const { data } = await axiosInstance.post("/api/users/register", {
      name,
      email,
      password,
    });
    return data;
  } catch (error: any) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const login = async ({ email, password }: any) => {
  try {
    const { data } = await axiosInstance.post("/api/users/login", {
      email,
      password,
    });
    return data;
  } catch (error: any) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
