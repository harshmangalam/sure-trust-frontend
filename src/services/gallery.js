import axios from "axios";

const fetchImages = async (url) => {
  try {
    const { data } = await axios.get(
      url.trim() ? url : "/gallery/get-all-images/"
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const fetchVideos = async () => {
  try {
    const { data } = await axios.get("/gallery/get-all-video/");
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const fetchDocuments = async () => {
  try {
    const { data } = await axios.get("/gallery/documents/");
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { fetchImages, fetchVideos, fetchDocuments };
