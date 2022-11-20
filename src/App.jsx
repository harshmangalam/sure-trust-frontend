import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/theme";
import { AuthProvider } from "./contexts/auth";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import AppRoutes from "./routes/AppRoutes";
import { ChatProvider } from "./contexts/chat";
// import { useEffect } from "react";
import ReactGA from "react-ga";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

const queryClient = new QueryClient();
axios.defaults.baseURL = process.env.REACT_APP_BASEURL;
const TRACKING_ID = process.env.REACT_APP_GA;
ReactGA.initialize(TRACKING_ID);

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
  // google analytics
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  // google tag manager
  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.REACT_APP_GTM_ID });
  }, []);

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
