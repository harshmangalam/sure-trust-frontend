import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/theme";
import { AuthProvider } from "./contexts/auth";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import AppRoutes from "./routes/AppRoutes";
import { ChatProvider } from "./contexts/chat";
// import { useEffect } from "react";
// import ReactGA from 'react-ga';
const queryClient = new QueryClient();
axios.defaults.baseURL = process.env.REACT_APP_BASEURL;
// const TRACKING_ID = "GTM-M356JTD"; // OUR_TRACKING_ID
// ReactGA.initialize(TRACKING_ID);

const student = localStorage.student
  ? JSON.parse(localStorage.getItem("student"))
  : null;

const teacher = localStorage.teacher
  ? JSON.parse(localStorage.getItem("teacher"))
  : null;

if (student) {
  axios.defaults.headers.common["Authorization"] = `Token ${student.token}`;
}

if (teacher) {
  axios.defaults.headers.common["Authorization"] = `Token ${teacher.token}`;
}

function App() {
  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ChatProvider>
          <ChakraProvider theme={theme}>
            <AppRoutes />
          </ChakraProvider>
        </ChatProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;

