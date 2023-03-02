import React, { useState } from "react";
import { Button, Stack, Box } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

function ImageCarousel(props) {
  const { images2 } = props;
  const images = [
    {
      src: require(
        './../../assets/images/image25.png'
    ),},
    {
      src: require(
        './../../assets/images/image26.png'
    ),},
    {
      src: require(
        './../../assets/images/image27.png'
    ),},
    {
      src: require(
        './../../assets/images/image25.png'
    ),},
    {
      src: require(
        './../../assets/images/image26.png'
    ),},
    {
      src: require(
        './../../assets/images/image27.png'
    ),},
  ]
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickNext = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  const handleClickPrev = () => {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <Stack direction={'row'} alignContent={'center'} justifyContent={'center'} height={'30vh'} marginBottom={'10vh'}>
        {images.map((image, index) => {
          if (index === activeIndex) {
            return (
              <Box marginX={'2vw'} component={'img'} src={image.src} height={'130%'}/>
            );
          } else if (
            index === (activeIndex + 1) % images.length ||
            (activeIndex === images.length - 1 && index === 0)
          ) {
            return (
              <Box marginX={'2vw'} component={'img'} src={image.src}/>
            );
          } else if (
            index === (activeIndex - 1 + images.length) % images.length ||
            (activeIndex === 0 && index === images.length - 1)
          ) {
            return (
              <Box marginX={'2vw'} component={'img'} src={image.src}/>
            );
          } else {
            return null;
          }
        })}
      </Stack>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Button onClick={handleClickPrev}>
          <NavigateBeforeIcon fontSize="large"/>
        </Button>
        <Button onClick={handleClickNext}>
          <NavigateNextIcon fontSize="large"/>
        </Button>
      </div>
    </div>
  );
}

export default ImageCarousel;


