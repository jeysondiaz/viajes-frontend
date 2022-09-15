import axios from "axios";
import IUser from "../types/IUser";
import { getURL, Paths } from "./utils";

export const createUser = async (user: IUser) => {
  try {
    const uri = getURL() + Paths.CREATE_USER;
    const response = await axios.post(uri, { user });

    return response.data;
  } catch (error) {
    return error;
  }
};
