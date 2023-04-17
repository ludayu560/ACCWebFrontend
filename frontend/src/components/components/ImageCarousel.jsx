import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Hidden from "@mui/material/Hidden";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

function ImageCarousel(props) {
  const [images, setImages] = useState()
  useEffect(() => {
    if (props.images.join() !== '') {
      setImages(props.images)
    }
  }, [props.images])

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickNext = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  const handleClickPrev = () => {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  return (
    (images?     <div>
      <Stack direction={'row'} alignContent={'center'} justifyContent={'center'} height={'50vh'} marginBottom={'10vh'} overflow={'hidden'}>
        {images.map((image, index) => {
          if (index === activeIndex) {
            return (
              <Box marginX={'2vw'} component={'img'} src={image} height={'100%'}/>
            );
          } else if (
            index === (activeIndex + 1) % images.length ||
            (activeIndex === images.length - 1 && index === 0)
          ) {
            return (
              <Box marginX={'2vw'} component={'img'} src={image} height={'90%'}/>
            );
          } else if (
            index === (activeIndex - 1 + images.length) % images.length ||
            (activeIndex === 0 && index === images.length - 1)
          ) {
            return (
              <Box marginX={'2vw'} component={'img'} src={image} height={'90%'}/>
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
    </div>: <div>loading</div>)
  )  
}

export default ImageCarousel;


