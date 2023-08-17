import axios from "axios";

async function getBloodDonation(page) {
  return await axios.get(`/community/blood_donate/?page=${page}`);
}

async function createBloodDonation(data) {
  return axios.post("/community/blood_donate/", data);
}

export { getBloodDonation, createBloodDonation };
