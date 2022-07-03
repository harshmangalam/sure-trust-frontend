import axios from "axios";

export const fetchCollaborators = async (url) => {
  try {
    const { data } = await axios.get(url ? url : "/home/collaborator/");
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchNotices = async () => {
  try {
    const { data } = await axios.get("/home/notice/");
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


export const fetchFeatures = async () => {
  try {
    const { data } = await axios.get("/home/about-suretrust/");
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};