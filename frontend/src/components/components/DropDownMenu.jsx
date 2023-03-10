import React, { useState } from "react";
import { 
    Grid, 
    Typography, 
    Menu, 
    FormControlLabel,
    Checkbox,
    List,
    ListItem,
    TextField,
} from "@mui/material";

const LoginStyle = {
    '& .MuiOutlinedInput-root': {
        borderRadius: '100vmax',
        border: '2px solid #73737380',
        width: '36vw',
    },
    '& .label': {
        color: '#000'
    }
  }

// A Function which renders an empty textbox with dropdown functionality. 
// Must be passed an array of items. 
function DropDownMenu(props) {
    const { options, label, hook} = props

    // handles the opening and closing of the popup. this is the LOCATION of the opening 
    const [anchorEl, setAnchorEl] = useState(null)

    // state handler for each of the individual buttons. abstracted to array of T/F and will be mapped through later
    const [traits, setTraits] = useState(new Array(options.length).fill(false))

    // state handler for the actual returned array of strings. mapped from traits and options
    const [returnTraits, setReturnTraits] = useState([])

    // interpolates the LOCATION of the anchor not being NULL to be True and flags open 
    const open = Boolean(anchorEl)

    const handleClickListItem = (event) => {
      setAnchorEl(event.currentTarget)
    };
  
    // when the popup is closed, map options and traits to set the new returned value. set anchor to null
    const handleClose = () => {
      const temp = []
      traits.map((item, index) => (item)? temp.push(options[index]) : null)
      setReturnTraits(temp)
      hook(returnTraits)
      setAnchorEl(null);
    };

    // when the menu is OPEN, we manage the abstracted states of each of the checkboxes T/F
    const handleTraitOnChange = (event, position) => {
        const newTraits = traits.map((item, index) => (index === position)? !item : item)
        setTraits(newTraits)
    }

    return (
        <div>
            <List disablePadding>
                <ListItem ListItemButton onClick={handleClickListItem} disablePadding>
                    <TextField disabled fullWidth='50vw' label={label} sx={LoginStyle} value={returnTraits.join(', ')}/>
                </ListItem> 
            </List>

            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <Grid container alignItems="center" paddingX={'6vw'} width={'36vw'}>
                    {options.map((option, index) => (
                        <FormControlLabel onChange={(event)=>handleTraitOnChange(event, index)} item sx={6} control={
                            <Checkbox defaultChecked={traits[index]} size="large" sx={{'&.Mui-checked': {color: '#F83E7D'}}}/>}
                            label={<Typography width='8vw'>{option}</Typography>}/>
                    ))}
                </Grid>
            </Menu>
        </div>
    )
}
export default DropDownMenu