import axios from "axios";

async function getBloodDonation(page, courseName) {
  return await axios.get(
    `/community/blood_donate/?course_name=${courseName}&page=${page}`
  );
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

async function fetchBloodDonationStats() {
  return axios.get("/community/blood_donate_course_count");
}

async function fetchSeniorCitizenStats() {
  return axios.get("/community/senior_citizen_course_count");
}

export {
  getBloodDonation,
  createBloodDonation,
  getSeniorCitizen,
  createSeniorCitizen,
  fetchBloodDonationStats,
  fetchSeniorCitizenStats,
};
