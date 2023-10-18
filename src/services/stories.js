import axios from "axios";

export const fetchStories = async () => {
  return axios.get("/courses/domain/");
};

export const fetchStory = async (id) => {
  return axios.get(`/courses/get_domain/${id}/`);
};
