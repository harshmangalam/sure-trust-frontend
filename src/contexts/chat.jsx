import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";
import { useNavigate } from "react-router-dom";
import {
  fetchStudentBatches,
  fetchTeacherBatches,
  fetchTeacherCourses,
} from "../services";
import { useAuthState } from "./auth";
import { io } from "socket.io-client";
import axios from "axios";
export const ChatStateContext = createContext();
export const ChatDispatchContext = createContext();

const userData =
  (localStorage.student && JSON.parse(localStorage.getItem("student"))) ||
  (localStorage.teacher && JSON.stringify(localStorage.getItem("teacher")));

const defaultState = {
  activeChat: null,
  courses: [],
  batches: [],
  isLoading: false,
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

    case "SET_ROOM_ID":
      return {
        ...state,
        activeChat: {
          ...state.activeChat,
          roomId: payload,
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

    case "REMOVE_MESSAGE":
      let filterMsg = state.activeChat.messages.filter(
        (msg) => msg._id !== payload
      );
      return {
        ...state,
        activeChat: {
          ...state.activeChat,
          messages: [...filterMsg],
        },
      };

    case "SET_LOADING":
      return {
        ...state,
        isLoading: payload,
      };

    default:
      throw new Error(`${type} is nat a valid action`);
  }
};

export const ChatProvider = ({ children }) => {
  const socketRef = useRef();
  const { role, isAuthenticated, currentUser } = useAuthState();
  const [state, dispatch] = useReducer(reducer, defaultState);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth", { replace: true });
    }

    if (role === "teacher") {
      handleFetchTeacherCourses();
    }

    if (role === "student") {
      handleFetchStudentBatches();
    }
  }, [role, isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated) {
      socketRef.current = io("http://localhost:4000", {
        auth: {
          token: userData?.token,
        },
      });
    }

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  async function handleFetchTeacherCourses() {
    try {
      const courses = await fetchTeacherCourses();

      dispatch({ type: "SET_COURSES", payload: courses });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleFetchStudentBatches() {
    try {
      const batches = await fetchStudentBatches();
      dispatch({ type: "SET_BATCHES", payload: batches });
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
      const roomId = `class-c-${batch.course.id}-b-${batch.id}`;

      dispatch({
        type: "SET_ROOM_ID",
        payload: roomId,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSentMessage(roomId, data) {
    try {
      const res = await axios.post(`http://localhost:4000/${roomId}`, data);

      dispatch({
        type: "ADD_MESSAGE",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleRemoveMessage(msgId) {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const res = await axios.delete(`http://localhost:4000/${msgId}`);
      if (res.data?.acknowledged) {
        dispatch({ type: "REMOVE_MESSAGE", payload: msgId });
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }
  return (
    <ChatStateContext.Provider value={state}>
      <ChatDispatchContext.Provider
        value={{
          handleFetchBatches,
          handleFetchMessages,
          handleSentMessage,
          handleRemoveMessage,
        }}
      >
        {children}
      </ChatDispatchContext.Provider>
    </ChatStateContext.Provider>
  );
};

export const useChatState = () => useContext(ChatStateContext);
export const useChatDispatch = () => useContext(ChatDispatchContext);
