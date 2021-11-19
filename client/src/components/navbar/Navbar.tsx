import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MoreHoriz } from '@mui/icons-material';
import './navbar.css'
import { makeStyles } from '@material-ui/core';
import {
    Link
  } from 'react-router-dom';

interface Props {} 
const useStyles = makeStyles((theme: any) => ({
  
    button_navbar: {
        float:"right"
    },
    
    navBar__icon: {
    color: "white"  
  },

  link: {
    textDecoration: 'none',
    color: 'rgb(61, 58, 58)'
    },

  navBar : {
    display: "flex",
    position: 'fixed',
    top: 0,
    width: '100%',
    justifyContent: "flex-end",
    margin: 0,
    zIndex: 1
  },
  
}));

const  Navbar:React.FC = (props: Props) => {
    const classes = useStyles();
   
    
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.navBar}>
      <Button
        id="basic-button"
        className={classes.button_navbar}
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreHoriz className={classes.navBar__icon}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Dinners</MenuItem>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>
                  <Link to='/login' className={classes.link}>Login</Link>
              </MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
export default  Navbar