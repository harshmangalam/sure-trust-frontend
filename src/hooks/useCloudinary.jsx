import { useState } from "react";
import shortid from "shortid";

const CLOUDINARY_ENDPOINT = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET}/image/upload`;

export default function useCloudinary() {
  const [uploading, setUploading] = useState(false);
  const [removing, setRemoving] = useState(false);

  async function removeImage() {
    try {
      setRemoving(true);
    } catch (error) {
      console.log(error);
    } finally {
      setRemoving(false);
    }
  }
  async function uploadToCloud(file) {
    const publicId = shortid.generate();
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append(
        "upload_preset",
        process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
      );
      formData.append("api_key", process.env.REACT_APP_CLOUDINARY_API_KEY);
      formData.append("public_id", publicId);

      const response = await fetch(CLOUDINARY_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setUploading(false);
    }
  }
  return {
    uploadToCloud,
    uploading,
    removeImage,
    removing,
  };
}
