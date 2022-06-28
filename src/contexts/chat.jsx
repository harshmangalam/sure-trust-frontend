import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import {
  fetchStudentData,
  fetchTeacherBatches,
  fetchTeacherCourses,
  fetchTeacherData,
} from "../services";
import { useAuthState } from "./auth";
export const ChatStateContext = createContext();
export const ChatDispatchContext = createContext();

const defaultState = {
  activeChat: null,
  courses: [],
  batches: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_BATCHES":
      return {
        ...state,
        batches: payload,
      };

    case "SET_COURSES":
      return {
        ...state,
        courses: payload,
      };
    case "SET_ACTIVE_CHAT":
      return {
        ...state,
        activeChat: payload,
      };

    default:
      throw new Error(`${type} is nat a valid action`);
  }
};

export const ChatProvider = ({ children }) => {
  const { role, isAuthenticated } = useAuthState();
  const [state, dispatch] = useReducer(reducer, defaultState);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth", { replace: true });
    }
    if (role === "teacher") {
      handleFetchTeacherCourses();
    }
  }, []);

  async function handleFetchTeacherCourses() {
    try {
      const courses = await fetchTeacherCourses();

      dispatch({ type: "SET_COURSES", payload: courses });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleFetchBatches(courseId) {
    try {
      const batches = await fetchTeacherBatches(courseId);
      dispatch({ type: "SET_BATCHES", payload: batches });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleFetchMessages(data) {
    dispatch({ type: "SET_ACTIVE_CHAT", payload: data });
  }
  return (
    <ChatStateContext.Provider value={state}>
      <ChatDispatchContext.Provider
        value={{ handleFetchBatches, handleFetchMessages }}
      >
        {children}
      </ChatDispatchContext.Provider>
    </ChatStateContext.Provider>
  );
};

export const useChatState = () => useContext(ChatStateContext);
export const useChatDispatch = () => useContext(ChatDispatchContext);
