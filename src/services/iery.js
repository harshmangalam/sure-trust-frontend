import axios from "axios";

export const fetchDomains = async () => {
  return  axios.get("/courses/domain/");
};
