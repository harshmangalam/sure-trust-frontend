import axios from "axios";

const NODE_BACKEND_URL = "https://suretrust-node.onrender.com";
// import.meta.env.REACT_APP_NODE_ENV === "development"
//   ? import.meta.env.REACT_APP_NODE_DEV_BASEURL
//   : import.meta.env.REACT_APP_NODE_PROD_BASEURL;

export const fetchPlantationCounts = async () => {
  return axios.get(`${NODE_BACKEND_URL}/api/plantation/counts`);
};

export const fetchPlantationLists = async () => {
  return axios.get(`${NODE_BACKEND_URL}/api/plantation`);
};

export const fetchPlantationCharts = async () => {
  return axios.get(`${NODE_BACKEND_URL}/api/plantation/charts`);
};

export const fetchPlantationAllowedUsers = async () => {
  return axios.get(`${NODE_BACKEND_URL}/api/plantation/allowed-users`);
};

export const createPlantation = async (data) => {
  return axios.post(`${NODE_BACKEND_URL}/api/plantation`, data);
};
