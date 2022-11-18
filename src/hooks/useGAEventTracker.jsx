import ReactGA from "react-ga";

const useGAEventTracker = (category) => {
  const eventTracker = (action, label) => {
    ReactGA.event({ category, action, label });
  };
  return eventTracker;
};
export default useGAEventTracker;
