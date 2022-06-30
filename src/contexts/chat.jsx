import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";
import { useNavigate } from "react-router-dom";
import { fetchTeacherBatches, fetchTeacherCourses } from "../services";
import { useAuthState } from "./auth";
import { io } from "socket.io-client";
import axios from "axios";
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

    case "SET_MESSAGES":
      return {
        ...state,
        activeChat: {
          ...state.activeChat,
          messages: payload,
        },
      };
    case "ADD_MESSAGE":
      return {
        ...state,
        activeChat: {
          ...state.activeChat,
          messages: [...state.activeChat.messages, payload],
        },
      };

    default:
      throw new Error(`${type} is nat a valid action`);
  }
};

export const ChatProvider = ({ children }) => {
  const socketRef = useRef();
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

  useEffect(() => {
    if (isAuthenticated) {
      socketRef.current = io("http://localhost:4000");
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

  async function handleFetchMessages(batch) {
    dispatch({
      type: "SET_ACTIVE_CHAT",
      payload: batch,
    });
    try {
      const res = await axios.get(
        `http://localhost:4000/${batch.course.id}/${batch.id}`
      );

      dispatch({
        type: "SET_MESSAGES",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSentMessage(data) {
    try {
      const res = await axios.post(`http://localhost:4000/`, data);

      dispatch({
        type: "ADD_MESSAGE",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <ChatStateContext.Provider value={state}>
      <ChatDispatchContext.Provider
        value={{ handleFetchBatches, handleFetchMessages, handleSentMessage }}
      >
        {children}
      </ChatDispatchContext.Provider>
    </ChatStateContext.Provider>
  );
};

export const useChatState = () => useContext(ChatStateContext);
export const useChatDispatch = () => useContext(ChatDispatchContext);
