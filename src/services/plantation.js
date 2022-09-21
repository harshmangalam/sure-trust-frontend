import axios from "axios";

const NODE_BACKEND_URL =
  process.env.REACT_APP_NODE_ENV === "development"
    ? process.env.REACT_APP_NODE_DEV_BASEURL
    : process.env.REACT_APP_NODE_PROD_BASEURL;

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
