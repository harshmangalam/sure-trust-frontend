import axios from "axios";

export const fetchDomains = async () => {
  return  axios.get("/courses/domain/");
};

export const fetchDomainDetails = async (id) => {
    return  axios.get(`/courses/get_domain/${id}/`);
  };
  
