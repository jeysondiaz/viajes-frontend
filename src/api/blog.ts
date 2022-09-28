import axios from "axios";
import IBlog from "../types/IBlog";
import { getURL, Paths } from "./utils";

export const createBlog = async (blog: IBlog) => {
  try {
    const user = localStorage.getItem("USER");
    console.log(user);
    

    if (user) {
      const uri = getURL() + Paths.CREATE_BLOG;
      const response = await axios.post(
        `${uri}${JSON.parse(user).data.idUser}`,
        { ...blog },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      return response.data;
    } else throw new Error("No hay usuario logueado");
  } catch (error) {
    throw error;
  }
};

export const getBlogById = async (idReview: number) => {
  try {
    const uri = getURL() + Paths.GET_BLOG;
    const response = await axios.get(`${uri}${idReview}`);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllBlogs = async () => {
  try {
    const uri = getURL() + Paths.GET_BLOG;
    const response = await axios.get(uri);

    return response.data;
  } catch (error) {
    throw error;
  }
};
