import axios from "axios";

export const fetchBoardMembers = async () => {
  return await axios.get("/home/board");
};
