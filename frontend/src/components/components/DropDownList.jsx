import React, { useState } from "react";
import { Grid, Typography, Menu} from "@mui/material";

import MenuItem from '@mui/material/MenuItem';
import {List} from "@mui/material";
import {ListItem} from "@mui/material";
import {ListItemText} from "@mui/material";
import StyledTextField from "./StyledTextField";


// A Function which renders an empty textbox with dropdown functionality. 
// Must be passed an array of items. current 
function DropDownList(props) {
    const { options, placeholder, setter } = props

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
      setSelectedIndex(index);
      setAnchorEl(null);
      setter(options[index])
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    return (
        <div>
            <List disablePadding>
                <ListItem ListItemButton onClick={handleClickListItem} disablePadding>
                    <StyledTextField disabled variant='dropDownMenu' placeholder={placeholder} color={'#000000'} value={options[selectedIndex]}/>
                </ListItem>
            </List>

            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                {options.map((option, index) => (
                <MenuItem
                    style={{
                        width: '17vw'
                    }}
                    key={option}
                    disabled={index === selectedIndex}
                    selected={index === selectedIndex}
                    onClick={(event) => handleMenuItemClick(event, index)}
                    >
                    {option}
                </MenuItem>
                ))}
            </Menu>
        </div>
    )
}
export default DropDownList