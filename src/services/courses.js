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


export const fetchCoursesByCategory = async (page,category)=>{
  try {
    const { data } = await axios.get(`/courses/get_courses_by_param/?category=${category}&page=${page ?? 1}`);
    return data;
  } catch (error) {
    console.log(error);
   
  }
}