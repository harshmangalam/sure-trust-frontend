import axios from "axios"

export const fetchCoursesSchedule = async () => {
  try {
    const { data } = await axios.get(`/home/course-schedule/`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
