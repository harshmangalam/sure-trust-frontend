import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/theme";
import { AuthProvider } from "./contexts/auth";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import AppRoutes from "./routes/AppRoutes";

const queryClient = new QueryClient();

axios.defaults.baseURL = process.env.REACT_APP_BASEURL;

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
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ChakraProvider theme={theme}>
          <AppRoutes />
        </ChakraProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
