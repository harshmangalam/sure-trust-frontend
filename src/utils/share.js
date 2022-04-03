export const share = async (data) => {
  try {
    await window.navigator.share(data);
  } catch (error) {
    console.log(error);
  }
};

export const hasShareSupported = () => {
  if (typeof window.navigator.canShare !== "undefined") {
    return true;
  }
  return false;
};
