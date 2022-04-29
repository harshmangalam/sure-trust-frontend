import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../components/shared/Loader";
import { useAuthState } from "../contexts/auth";

const MainLayout = lazy(() => import("../screens/main"));
const Home = lazy(() => import("../screens/main/Home"));
const ResearchGuidance = lazy(() => import("../screens/main/ResearchGuidance"));
const About = lazy(() => import("../screens/main/About"));
const Contact = lazy(() => import("../screens/main/Contact"));
const Courses = lazy(() => import("../screens/main/Courses"));
const Reviews = lazy(() => import("../screens/main/Reviews"));

const Course = lazy(() => import("../screens/main/Course"));
const LstProgram = lazy(() => import("../screens/main/LstProgram"));
const KnowMore = lazy(() => import("../screens/main/KnowMore"));
const PhotoGallery = lazy(() => import("../screens/main/PhotoGallery"));
const Developers = lazy(() => import("../screens/main/Developers"));
const VideoGallary = lazy(() => import("../screens/main/VideoGallary"));
const Documents = lazy(() => import("../screens/main/Documents"));

const AuthLayout = lazy(() => import("../screens/auth"));
const Login = lazy(() => import("../screens/auth/Login"));
const Signup = lazy(() => import("../screens/auth/Signup"));
const ResetPassword = lazy(() => import("../screens/auth/ResetPassword"));

const DashboardLayout = lazy(() => import("../screens/dashboard/"));
const Dashboard = lazy(() => import("../screens/dashboard/Dashboard"));
const Profile = lazy(() => import("../screens/dashboard/Profile"));
const EditProfile = lazy(() => import("../screens/dashboard/EditProfile"));

const TeacherCourses = lazy(() =>
  import("../screens/dashboard/teacher/Courses")
);
const TeacherBatches = lazy(() =>
  import("../screens/dashboard/teacher/Batches")
);
const TeacherBatchStudents = lazy(() =>
  import("../screens/dashboard/teacher/Students")
);

const TeacherBatchPosts = lazy(() =>
  import("../screens/dashboard/teacher/Posts")
);

const TeacherBatchPostCreate = lazy(() =>
  import("../screens/dashboard/teacher/AddPost")
);

const TeacherBatchAssignmentPosts = lazy(() =>
  import("../screens/dashboard/teacher/AssigmentPosts")
);

const TeacherPostGrades = lazy(() =>
  import("../screens/dashboard/teacher/Grades")
);

const TeacherRecording = lazy(() => import("../screens/TeacherRecording"));

const StudentBatches = lazy(() =>
  import("../screens/dashboard/student/Batches")
);

const StudentBatchPosts = lazy(() =>
  import("../screens/dashboard/student/Posts")
);

const StudentPostGrades = lazy(() =>
  import("../screens/dashboard/student/Grades")
);

const StudentRecording = lazy(() => import("../screens/StudentRecording"));
const Meet = lazy(() => import("../screens/Meet"));

const NotFound = lazy(() => import("../screens/NotFound"));

function AppRoutes() {
  const { role } = useAuthState();
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="know-more" element={<KnowMore />} />
          <Route path="research-guidance" element={<ResearchGuidance />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="reviews" element={<Reviews />} />

          <Route path="photo-gallery" element={<PhotoGallery />} />
          <Route path="courses" element={<Courses />} />
          <Route path="lst" element={<LstProgram />} />
          <Route path="courses/:id" element={<Course />} />
          <Route path="developers" element={<Developers />} />
          <Route path="video-gallery" element={<VideoGallary />} />
          <Route path="documents" element={<Documents />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>

        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />

          {role === "student" && (
            <>
              <Route path="batches" element={<StudentBatches />} />
              <Route
                path="batches/:batchId/courses/:courseId/posts"
                element={<StudentBatchPosts />}
              />
              <Route
                path="batches/:batchId/courses/:courseId/posts/:postId/grades"
                element={<StudentPostGrades />}
              />
            </>
          )}

          {role === "teacher" && (
            <>
              <Route path="courses" element={<TeacherCourses />} />
              <Route path="courses/:courseId" element={<TeacherBatches />} />
              <Route
                path="courses/:courseId/batches/:batchId/students"
                element={<TeacherBatchStudents />}
              />
              <Route
                path="courses/:courseId/batches/:batchId/posts"
                element={<TeacherBatchPosts />}
              />
              <Route
                path="courses/:courseId/batches/:batchId/posts/create"
                element={<TeacherBatchPostCreate />}
              />
              <Route
                path="courses/:courseId/batches/:batchId/assignment-posts"
                element={<TeacherBatchAssignmentPosts />}
              />
              <Route
                path="courses/:courseId/batches/:batchId/posts/:postId/grades"
                element={<TeacherPostGrades />}
              />
            </>
          )}

          <Route path="profile" element={<Profile />} />
          <Route path="profile/edit" element={<EditProfile />} />
        </Route>

        <Route path="meet" element={<Meet />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
