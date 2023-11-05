import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/theme";
import { AuthProvider } from "./contexts/auth";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import AppRoutes from "./routes/AppRoutes";
import { ChatProvider } from "./contexts/chat";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import { Partytown } from "@builder.io/partytown/react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
axios.defaults.baseURL = import.meta.env.REACT_APP_BASEURL;

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

const TRACKING_ID = import.meta.env.REACT_APP_GA;
ReactGA.initialize(TRACKING_ID);
function App() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
  return (
    <>
      <Partytown debug={true} forward={["dataLayer.push", "gtag"]} />
      <script
        type="text/partytown"
        src="https://www.googletagmanager.com/gtag/js?id=GTM-WGHWSMB"
      ></script>
      <script
        type="text/partytown"
        src="https://meet.jit.si/external_api.js"
      ></script>
      <script
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GTM-WGHWSMB');
          `,
        }}
      />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ChatProvider>
            <ChakraProvider theme={theme}>
              <AppRoutes />
            </ChakraProvider>
          </ChatProvider>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
