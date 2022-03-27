export const share = async (data) => {
  if (typeof window.navigator.canShare !== "undefined") {
    if (window.navigator.canShare(data)) {
      await window.navigator.share(data);
    }
  }
};
