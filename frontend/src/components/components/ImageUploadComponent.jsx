import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

const ImageUpload = (props) => {
  const { wide = false, returnSelected, defaultLink } = props;

  const [selectedImage, setSelectedImage] = useState(null);

  const [previewImage, setPreviewImage] = useState(null);
  const [uniqueId, setUniqueId] = useState(null);

  // generate uninque ID per instance
  useEffect(() => {
    setUniqueId(`image-upload-${Math.random().toString(36).substr(2, 9)}`);
  }, []);

  // will return the image up only after the image is properly given
  useEffect(() => {
    if (selectedImage) {
      returnSelected(selectedImage);
    }
  }, [selectedImage]);

  const placeholderImageUrl = require("../../assets/images/missingImage.png");
  const placeholderImageUrlWide = require("../../assets/images/missingImageWide.png");

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <Box>
      <input
        accept="image/*"
        id={uniqueId}
        type="file"
        hidden
        onChange={handleImageChange}
      />
      <label htmlFor={uniqueId}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width={props.width ? props.width : "500px"}
          height={
            props.height
              ? props.height
              : `calc(${props.width ? props.width : "500px"} * 0.64)`
          }
          overflow="hidden"
          borderRadius="30px"
          position="relative"
        >
          <img
            src={
              previewImage ||
              (wide ? placeholderImageUrlWide : placeholderImageUrl)
            }
            alt="upload"
            style={{
              cursor: "pointer",
              borderRadius: "30px",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </label>
    </Box>
  );
};

export default ImageUpload;
