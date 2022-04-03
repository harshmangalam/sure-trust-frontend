import axios from "axios";

export * from "./gallery";
export * from "./reviews";

export const signup = async (payload) => {
  try {
    const { data } = await axios.post(`/users/`, payload);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchCourses = async (url) => {
  try {
    const { data } = await axios.get(url ? url : `/courses/get-all-courses/`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const exitCourse = async (courseId) => {
  try {
    const { data } = await axios.post(`/student/exit-course`, {
      course_id: courseId,
    });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchCourseById = async (id) => {
  try {
    const { data } = await axios.get(`/courses/get-course/${id}/`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchCourseTeachers = async (id) => {
  try {
    const { data } = await axios.get(`/courses/get-course-teachers/${id}/`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchStudentData = async ({ regno }) => {
  try {
    const { data } = await axios.get(`/student/student/${regno}/`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const loginStudent = async (payload) => {
  try {
    const { data } = await axios.post("/users/get-token/", payload);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// ------------- students ----------------

export const enrollStudentToCourse = async (courseId) => {
  try {
    const { data } = await axios.post(`/users/add-to-course/${courseId}/`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateStudentProfile = async (regno, payload) => {
  try {
    const { data } = await axios.put(`student/student/${regno}/`, {
      ...payload,
      registration_no: regno,
    });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchStudentCourses = async () => {
  try {
    const { data } = await axios.get(`/courses/course/`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchStudentBatches = async () => {
  try {
    const { data } = await axios.get(`/courses/batch/`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchStudentPostGrades = async (postId) => {
  try {
    const { data } = await axios.get(`/courses/grades/`, {
      headers: {
        "post-id": postId,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// batches

export const fetchBatchPosts = async (batchId, page = 1) => {
  try {
    const { data } = await axios.get(`/courses/posts/?page=${page}`, {
      headers: {
        "batch-id": batchId,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// -------- teacher-------

export const fetchTeacherData = async ({ teacher_id }) => {
  try {
    const { data } = await axios.get(`/teacher/${teacher_id}/`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchTeacherBatches = async (courseId) => {
  try {
    const { data } = await axios.get(`/courses/batch/`, {
      headers: {
        "course-id": courseId,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchTeacherBatchStudents = async (batchId) => {
  try {
    const { data } = await axios.post(`/courses/students-of-batch/`, {
      batch_id: batchId,
    });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchTeacherBatchPosts = async (batchId, page = 1) => {
  try {
    const { data } = await axios.get(`/courses/posts/?page=${page}`, {
      headers: {
        "batch-id": batchId,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchTeacherCourses = async () => {
  try {
    const { data } = await axios.get(`/courses/course/`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchTeacherBatchAssignmentPosts = async (batchId) => {
  try {
    const { data } = await axios.post(`/courses/assignment-posts/`, {
      batch_id: batchId,
    });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchTeacherBatchGrades = async (postId) => {
  try {
    const { data } = await axios.get(`/courses/grades/`, {
      headers: {
        "post-id": postId,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createTeacherPost = async (formData, batchId) => {
  try {
    const { data } = await axios.post(`/courses/posts/`, formData, {
      headers: {
        "batch-id": batchId,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const patchBatchInformation = async ({
  batchId,
  courseId,
  meetingCode,
}) => {
  try {
    const { data } = await axios.patch(
      `/courses/batch/${batchId}/`,
      {
        meeting_code: meetingCode,
      },
      {
        headers: {
          "course-id": courseId,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
