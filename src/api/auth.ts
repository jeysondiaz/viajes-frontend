import axios from "axios";
import { getURL, Paths } from "./utils";

export const getLoginAcces = (email: string, password: string) => {
  const uri = getURL() + Paths.LOGIN;
  return axios.get(uri, {
    params: {
      email,
      password,
    }
  })
}