import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Button, ButtonBase } from '@mui/material';

export default function SearchBar() {
  return (
    <Paper
      component="form"
      sx={{display: 'flex', alignItems: 'center', width: 1200, height: 70, borderRadius: 25}}
      elevation={10}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, p: 4}}
        placeholder="Search for topics or questions..."
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '20px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider orientation="vertical" sx={{ borderRightWidth: 2, borderBottomWidth:40}}/>
      <ButtonBase variant='text' sx={{ p: '20px', textTransform: 'none', borderRadius: 25}}>
        Menu
      </ButtonBase>
    </Paper>
  );
}
