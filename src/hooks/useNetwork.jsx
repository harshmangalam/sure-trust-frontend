import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function useNetwork() {
  const [isOnline, setIsOnline] = useState(false);
  const toast = useToast();
  const checkNetworkStatus = () => {
    const isOnline = window.navigator?.onLine;
    setIsOnline(isOnline);
  };

  const handleStatusChange = (e) => {
    const isOnline = e.type === "online";
    setIsOnline(isOnline);
    toast({
      status: isOnline ? "success" : "warning",
      title: "Network Status",
      description: isOnline ? "You are Online" : "You are offline",
      isClosable: true,
      duration: 6000,
    });
  };

  useEffect(() => {
    checkNetworkStatus();

    window.addEventListener("online", handleStatusChange);
    window.addEventListener("offline", handleStatusChange);

    return () => {
      window.removeEventListener("online", handleStatusChange)
      window.removeEventListener("offline", handleStatusChange)
    }
  }, []);
  return {
    isOnline,
  };
}
