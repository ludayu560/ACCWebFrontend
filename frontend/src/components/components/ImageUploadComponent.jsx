import React, { useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const placeholderImageUrl = require("../../assets/images/missingImage.png"); // Replace with your own placeholder image URL

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("image", selectedImage);

    axios
      .post("http://127.0.0.1:8000/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Box>
      <input
        accept="image/*"
        id="image-upload"
        type="file"
        hidden
        onChange={handleImageChange}
      />
      <label htmlFor="image-upload">
        <img
          src={previewImage || placeholderImageUrl}
          alt="upload"
          style={{
            cursor: "pointer",
            width: "500px",
            height: "320px",
            borderRadius: "30px",
          }}
        />
      </label>
      {selectedImage && handleUpload()}
    </Box>
  );
};

export default ImageUpload;
