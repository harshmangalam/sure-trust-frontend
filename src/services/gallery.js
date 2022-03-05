import axios from "axios";

const fetchImages = async (url) => {
  try {
    const { data } = await axios.get(url ? url : "/gallery/get-all-images/");
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const fetchVideos = async (url) => {
  try {
    const { data } = await axios.get(url ? url : "/gallery/get-all-video/");
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const fetchDocuments = async (url) => {
  try {
    const { data } = await axios.get(url ? url : "/gallery/documents/");
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { fetchImages, fetchVideos, fetchDocuments };
