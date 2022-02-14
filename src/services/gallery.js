import axios from "axios";

const fetchImages = async () => {
  try {
    const { data } = await axios.get("/gallery/get-all-images/");
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

export { fetchImages, fetchVideos };
