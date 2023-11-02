import axios from "axios";

// courses/placement-member/
export const fetchPlacementCellMembers = async () => {
  return axios.get(`/courses/placement-member/`);
};
