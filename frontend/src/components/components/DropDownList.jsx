import React, { useState } from "react";
import { Grid, Typography, Menu, TextField} from "@mui/material";

import MenuItem from '@mui/material/MenuItem';
import {List} from "@mui/material";
import {ListItem} from "@mui/material";
import {ListItemText} from "@mui/material";
import StyledTextField from "./StyledTextField";
import CustomTextField from "./CustomTextField";

const LoginStyle = {
    '& .MuiOutlinedInput-root': {
        borderRadius: '100vmax',
        border: '2px solid #73737380',
        width: '17vw',
    },
  }

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
                    <CustomTextField disabled variant="signup" placeholder={placeholder} value={options[selectedIndex]} style={{width:"25vw"}}/>
                </ListItem>
            </List>

            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                {options.map((option, index) => (
                <MenuItem
                    style={{
                        width: '25vw'
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