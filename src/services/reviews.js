import axios from "axios";

export const fetchReviews = async (page = 1) => {
  const URL = `https://service-reviews-ultimate.elfsight.com/data/reviews?uris%5B%5D=ChIJv8VpO8lksTsR1eZXV_FrFWQ&page_length=6&order=date&page=${page}`;
  return await axios.get(URL);
};
