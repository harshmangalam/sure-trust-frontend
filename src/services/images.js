import axios from "axios";

const NODE_BACKEND_URL =
  import.meta.env.REACT_APP_NODE_ENV === "development"
    ? import.meta.env.REACT_APP_NODE_DEV_BASEURL
    : import.meta.env.REACT_APP_NODE_PROD_BASEURL;

export const deleteImage = async (publicId) => {
  return axios.delete(`${NODE_BACKEND_URL}/api/images/${publicId}`);
};
