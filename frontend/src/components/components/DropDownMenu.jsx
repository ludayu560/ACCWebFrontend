import React, { useState } from "react";
import { 
    Grid, 
    Typography, 
    Menu, 
    FormControlLabel,
    Checkbox,
    Box,
    Paper,
    List,
    ListItem,
    ListItemText,
    MenuItem,
} from "@mui/material";

import StyledTextField from "./StyledTextField";


// A Function which renders an empty textbox with dropdown functionality. 
// Must be passed an array of items. current 
function DropDownMenu(props) {
    const { options, placeholder, hook} = props

    const [anchorEl, setAnchorEl] = useState(null)

    const [traits, setTraits] = useState(new Array(options.length).fill(false))

    const open = Boolean(anchorEl)
    const handleClickListItem = (event) => {
      setAnchorEl(event.currentTarget)
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleTraitOnChange = (event, position) => {
        setTraits(traits.map((item, index) => (index === position)? !item : item))
        hook(traits)
    }

    return (
        <div>
            <List disablePadding>
                <ListItem ListItemButton onClick={handleClickListItem} disablePadding>
                    <StyledTextField disabled variant='dropDownMenu' placeholder={placeholder} color={'#000'} width='36vw'/>
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