import React, { useState, useRef, useEffect } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import StyledButton from './StyledButton';

const CustomSliderStyles = {
  // the entire range of possible values
  '& .MuiSlider-rail': {
    color: '#D9D9D9',
  },
  // the line between the two ends
  '& .MuiSlider-track': {
    color: '#F83E7D',
  },
  // the endpoints
  '& .MuiSlider-thumb': {
    color: '#F83E7D',
  },
  // the label displaying the current value
  '& .MuiSlider-valueLabel': {
    background: 'transparent',
    color: '#000',
    padding: '0',
  }
}
const CustomCheckboxStyles = {
    // the box color when unchecked
    color: '#B9B9B9',
    // the color when checked
    '&.Mui-checked': {
        color: '#F83E7D'
    },
    // the size of the underlying svg icon
    '& .MuiSvgIcon-root': { 
        fontSize: 32 
    }
}

function HousemateFilterPanel(props) {
  const {returnHook, query, traitList, interestList} = props
  const [open, setOpen] = useState(false);

  // manage states here
  const [ageRange, setAge] = useState([25, 40]);
  const [priceRange, setPrice] = useState([700, 1500]);
  const [housemateType, setHousemateType] = useState('Tenant');
  const [traitArray, setTraitArray] = useState(new Array(traitList.length).fill(false))
  const [interestArray, setInterestArray] = useState(new Array(interestList.length).fill(false))

  // Handle the final submitting of the form to filter things
  const handleSubmit = () => {
    const returnedJSON = {
        traits: [],
        interests: [],
        ageRange: ageRange,
        priceRange: priceRange,
        housemateType: housemateType,
        // fullArray: 
    }
    traitArray.map((item, index) => (item)? returnedJSON.traits.push(traitList[index]) : null)
    interestArray.map((item, index) => (item)? returnedJSON.interests.push(interestList[index]) : null)
    
    // return the submitted data
    returnHook(returnedJSON)
    query(true)
    
    // close the menu
    setOpen(false)
  }

  // Handle the selection of traits
  const handleTraitOnChange = (event, i) => {
    const newTraits = traitArray.map((item, index) => (index === i)? !item : item)
    setTraitArray(newTraits)
  }

  // Handle the selection of interests
  const handleInterestOnChange = (event, i) => {
    const newInterests = interestArray.map((item, index) => (index === i)? !item : item)
    setInterestArray(newInterests)
  }

  // Handle the selection of the Housemate type
  const handleHousemateChange = (event, type) => {
    if (type === "Tenant") {
        setHousemateType(type)
    } else if (type === "Homeowner") {
        setHousemateType(type)
    }
  }

  // Check if the user clicks out of the menu, close the menu if so. 
  const sideMenuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {setOpen(false)}};

      document.addEventListener('mousedown', handleClickOutside);

    return () => {document.removeEventListener('mousedown', handleClickOutside)};
  }, [sideMenuRef]);

  return (
    <div> 
      <IconButton onClick={() => setOpen(!open)}>
        <StyledButton variant="pinkBtn" text="Filters" />
      </IconButton>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        ref={sideMenuRef}
        width={'25vw'}
      >
        <Stack marginX={'2vw'} alignItems={'center'}>
            <Typography 
                color={'#F83E7D'} 
                fontWeight={700}
                fontSize={24}
                marginTop={'5vh'}
                textAlign={'center'}
            >
                Add Filters
            </Typography>
            <Container>
                <Typography 
                    marginBottom={'3vh'}
                    gutterBottom
                    fontWeight={700} 
                >
                    Age
                </Typography>
                <Slider
                    value={ageRange}
                    onChange={(event, age) => {setAge(age)}}
                    valueLabelDisplay="on"
                    max={100}
                    min={16}
                    sx={CustomSliderStyles}
                />
            </Container>
            <Container>
                <Typography 
                    marginY={'3vh'}
                    gutterBottom
                    fontWeight={700} 
                >
                    Price Range
                </Typography>
                <Slider
                    value={priceRange}
                    onChange={(event, price) => {setPrice(price)}}
                    valueLabelDisplay="on"
                    max={4000}
                    min={400}
                    sx={CustomSliderStyles}
                />
            </Container>
            <Container>
                <Typography 
                    marginTop={'3vh'}
                    gutterBottom
                    fontWeight={700} 
                >
                    I am looking for a...
                </Typography>
                <FormControlLabel
                    control={<Checkbox checked={housemateType === 'Tenant'} sx={CustomCheckboxStyles} onChange={(event) => {handleHousemateChange(event,'Tenant')}}/>}
                    label={<Typography fontWeight={600} color={'#323232'}> Housemate </Typography>}
                />
                <FormControlLabel
                    control={<Checkbox checked={housemateType === 'Homeowner'} sx={CustomCheckboxStyles} onChange={(event) => {handleHousemateChange(event,'Homeowner')}}/>}
                    label={<Typography fontWeight={600} color={'#323232'}> Female Homeowner </Typography>}
                />
            </Container>
            <Container>
                <Typography 
                    marginTop={'3vh'}
                    gutterBottom
                    fontWeight={700} 
                >
                    Interests
                </Typography>

                <Grid container width={'25vw'}>
                    {interestList.map((trait, index) => (
                        <FormControlLabel 
                            onChange={(event)=>handleInterestOnChange(event, index)} 
                            control={<Checkbox defaultChecked={interestArray[index]} sx={CustomCheckboxStyles}/>}
                            label={<Typography width='100px' fontWeight={600} color={'#323232'}>{trait}</Typography>}
                        />
                    ))}
                </Grid>
            </Container>
            <Container>
                <Typography 
                    marginTop={'3vh'}
                    gutterBottom
                    fontWeight={700} 
                >
                    Personality Traits
                </Typography>

                <Grid container width={'25vw'}>
                    {traitList.map((trait, index) => (
                        <FormControlLabel 
                            onChange={(event)=>handleTraitOnChange(event, index)} 
                            control={<Checkbox defaultChecked={traitArray[index]} sx={CustomCheckboxStyles}/>}
                            label={<Typography width='100px' fontWeight={600} color={'#323232'}>{trait}</Typography>}
                        />
                    ))}
                </Grid>
            </Container>
            <Box marginY={'5vh'}>
                <StyledButton variant="pinkBtn" width='15vw' onClick={handleSubmit}> Filter </StyledButton>
            </Box>
        </Stack>
      </Drawer>
    </div>
  );
}

export default HousemateFilterPanel;
