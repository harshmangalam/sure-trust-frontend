import axios from "axios";

const NODE_BACKEND_URL =
  import.meta.env.REACT_APP_NODE_ENV === "development"
    ? import.meta.env.REACT_APP_NODE_DEV_BASEURL
    : import.meta.env.REACT_APP_NODE_PROD_BASEURL;

export const fetchPlantationCounts = async () => {
  const resp = await fetch(`${NODE_BACKEND_URL}/api/plantations/stats`);
  const data = await resp.json();
  return axios.get(`${NODE_BACKEND_URL}/api/plantations/stats`);
};

export const fetchPlantationLists = async () => {
  return axios.get(`${NODE_BACKEND_URL}/api/plantations`);
};

export const fetchPlantationCharts = async () => {
  return axios.get(`${NODE_BACKEND_URL}/api/plantations/charts`);
};

export const fetchPlantationAllowedUsers = async () => {
  return axios.get(`${NODE_BACKEND_URL}/api/plantations/allowed-users`);
};

export const createPlantation = async (data) => {
  return axios.post(`${NODE_BACKEND_URL}/api/plantations`, data);
};
