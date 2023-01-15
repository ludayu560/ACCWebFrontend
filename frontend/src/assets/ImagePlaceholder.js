import React from 'react';

const ImagePlaceholder = ({width, height}) => {
  return (
    <div style={{
      width,
      height,
      border: 'solid',
      borderColor: 'gray',
      borderWidth: '5px',
      borderRadius: '3vmin',
      margin: '1vmin'
    }} />
  );
}

export default ImagePlaceholder;
