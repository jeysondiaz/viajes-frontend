import axios from "axios";
import { getURL, Paths } from "./utils";

export const getLoginAcces = async (email: string, password: string) => {
  try {
    const uri = getURL() + Paths.LOGIN;
    const response = await axios.get(uri, {
      params: {
        email,
        password,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
