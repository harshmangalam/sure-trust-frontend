import axios from "axios";

async function getBloodDonation(page) {
  return await axios.get(`/community/blood_donate/?page=${page}`);
}

async function createBloodDonation(data) {
  return axios.post("/community/blood_donate/", data);
}

async function getSeniorCitizen(page) {
  return await axios.get(`/community/senior_citizen/?page=${page}`);
}

async function createSeniorCitizen(data) {
  return axios.post("/community/senior_citizen/", data);
}

export {
  getBloodDonation,
  createBloodDonation,
  getSeniorCitizen,
  createSeniorCitizen,
};
