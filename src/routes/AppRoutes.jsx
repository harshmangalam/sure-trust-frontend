import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../components/shared/Loader";
import { useAuthState } from "../contexts/auth";

const MainLayout = lazy(() => import("../screens/main"));
const Home = lazy(() => import("../screens/main/Home"));
const About = lazy(() => import("../screens/main/About"));
const Contact = lazy(() => import("../screens/main/Contact"));
const Courses = lazy(() => import("../screens/main/Courses"));
const Course = lazy(() => import("../screens/main/Course"));
const LstProgram = lazy(() => import("../screens/main/LstProgram"));
const PhotoGallery = lazy(() => import("../screens/main/PhotoGallery"));
const Developers = lazy(() => import("../screens/main/Developers"));
const VideoGallary = lazy(() => import("../screens/main/VideoGallary"));
const Documents = lazy(() => import("../screens/main/Documents"));
const PlacementCell = lazy(() => import("../screens/main/placement-cell"));
const AuthLayout = lazy(() => import("../screens/auth"));
const Login = lazy(() => import("../screens/auth/Login"));
const Signup = lazy(() => import("../screens/auth/Signup"));
const ResetPassword = lazy(() => import("../screens/auth/ResetPassword"));

const DashboardLayout = lazy(() => import("../screens/dashboard/"));
const Dashboard = lazy(() => import("../screens/dashboard/Dashboard"));
const Profile = lazy(() => import("../screens/dashboard/Profile"));
const EditProfile = lazy(() => import("../screens/dashboard/EditProfile"));

// services for comminity
const ServicesForCommunityLayout = lazy(() =>
  import("../screens/services-for-community/layout")
);
const ServicesForCommunity = lazy(() =>
  import("../screens/services-for-community/page")
);

const Plantation = lazy(() =>
  import("../screens/services-for-community/plantation/page")
);

const BloodDonation = lazy(() =>
  import("../screens/services-for-community/blood-donation")
);
const BloodDonationDetails = lazy(() =>
  import("../screens/services-for-community/blood-donation/details")
);
const SeniorCitizen = lazy(() =>
  import("../screens/services-for-community/senior-citizen/")
);
const SeniorCitizenDetails = lazy(() =>
  import("../screens/services-for-community/senior-citizen/details")
);

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

const StudentBatches = lazy(() =>
  import("../screens/dashboard/student/Batches")
);

const StudentBatchPosts = lazy(() =>
  import("../screens/dashboard/student/Posts")
);

const StudentPostGrades = lazy(() =>
  import("../screens/dashboard/student/Grades")
);

const Meet = lazy(() => import("../screens/Meet"));

// Blog
// const BlogLayout = lazy(() => import("../screens/blog/BlogLayout"));
// const BlogHome = lazy(() => import("../screens/blog"));
// const Posts = lazy(() => import("../screens/blog/Posts"));
// const CreatePost = lazy(() => import("../screens/blog/CreatePost"));

// chat

const ChatLayout = lazy(() => import("../screens/chat"));
const ChatHome = lazy(() => import("../screens/chat/Home"));
const ActiveChat = lazy(() => import("../screens/chat/ActiveChat"));
const NotFound = lazy(() => import("../screens/NotFound"));

// iery
const IERYHome = lazy(() => import("../screens/main/iery"));
const IERYDomain = lazy(() => import("../screens/main/iery/IeryDomain"));

function AppRoutes() {
  const { role, isAuthenticated } = useAuthState();
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="photo-gallery" element={<PhotoGallery />} />
          <Route path="courses" element={<Courses />} />
          <Route path="lst" element={<LstProgram />} />
          <Route path="courses/:id" element={<Course />} />
          <Route path="developers" element={<Developers />} />
          <Route path="video-gallery" element={<VideoGallary />} />
          <Route path="documents" element={<Documents />} />
          <Route path="iery" element={<IERYHome />} />
          <Route path="iery/:id" element={<IERYDomain />} />
          <Route path="placement-cell" element={<PlacementCell />} />
        </Route>

        {!isAuthenticated && (
          <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>
        )}

        {isAuthenticated && (
          <Route path="/chat" element={<ChatLayout />}>
            <Route index element={<ChatHome />} />
            <Route path="activeChat" element={<ActiveChat />} />
          </Route>
        )}

        {isAuthenticated && (
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
        )}

        <Route path="meet" element={<Meet />} />

        {/* <Route path="blog" element={<BlogLayout />}>
          <Route index element={<BlogHome />} />
          <Route path="posts" element={<Posts />} />
          <Route path="create-post" element={<CreatePost />} />
        </Route> */}

        <Route
          path="services-for-community"
          element={<ServicesForCommunityLayout />}
        >
          <Route index element={<ServicesForCommunity />} />
          <Route path="plantation" element={<Plantation />} />
          <Route path="blood-donation" element={<BloodDonation />} />
          <Route
            path="blood-donation/details"
            element={<BloodDonationDetails />}
          />
          <Route path="senior-citizen" element={<SeniorCitizen />} />
          <Route
            path="senior-citizen/details"
            element={<SeniorCitizenDetails />}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
