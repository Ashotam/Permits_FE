import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Drawer,
  FormGroup,
  IconButton,
  List,
  FormControlLabel,
  Switch,
  Typography,
  Menu,
  MenuItem,
  ListItemButton,
  Toolbar,
  Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { useQuery } from 'react-query';
import axios from 'axios';
const CustomAppBar = styled(AppBar)(({ theme }) => ({
  // background: 'rgba(20, 60, 220, 0.8)', // Stronger and darker blue background with transparency
  // backdropFilter: 'blur(10px)', // Glassmorphic effect
  // boxShadow: 'none', // Remove the default shadow
  // color: 'rgba(255, 255, 255, 0.8)', // Light text color
  // '& a': {
  //   color: 'rgba(255, 255, 255, 0.8)', // Light link color
  // },
}));

const CustomDrawer = styled(Drawer)(({ theme }) => ({
  '& a': {
    color: 'none', // Light link color
  },
}));

const CustomList = styled(List)(({ theme }) => ({
  background: 'rgba(20, 60, 220, 0.8)',// Stronger and darker blue background with transparency
  backdropFilter: 'blur(10px)', // Glassmorphic effect
  boxShadow: 'none', // Remove the default shadow
  color: 'rgba(255, 255, 255, 0.8)', // Light text color
  '& a': {
    color: 'rgba(255, 255, 255, 0.8)', // Light link color
  },
  width: '240px',
  padding: '32px',
  height:'100vh'
}));

const CustomListItemButton = styled(ListItemButton)(({ theme }) => ({
  width:'100%',
  '& a': {
    color: 'rgba(255, 255, 255, 0.8)', // Light link color
    textDecoration: 'none', // Remove underlines from links
    marginLeft: '20px', // Adjust left margin
  },
  '&:hover': {
    background: 'rgba(20, 20, 140, 0.4)', // Background color on hover
    borderBottom: '2px solid rgba(255, 255, 255, 0.8)', // Add a white border bottom on hover
  },
}));

export default function MenuAppBar() {
  const [auth, setAuth] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    let login: boolean = event.target.checked
    // if(login){
    //   await axios.post('http://localhost:3000/login',{email:"test@gmail.com",password:"test1234"}).then((a: any)=>{
    //     //console.log(data)
    //     setAuth(login);
    //   });
      
      
    // }else{
    //   await axios.post('http://localhost:3000/logout',{email:"test@gmail.com",password:"test1234"}).then((data: any)=>{
    //     console.log(data)
    //     setAuth(login);
    //   });
    // }
    setAuth(login);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
 const signUp = async()=>{
  debugger;
  
    const { data } = await axios.post('http://localhost:3000/signup',{email:"test@gmail.com",password:"test1234"});
    console.log(data)
    
 }



  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <CustomAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button onClick={()=>signUp()} style={{color:"white"}}> Sign up </Button>
          </Typography>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Card
          </Typography>
          <CustomDrawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
            <CustomList>
              <CustomListItemButton>
                <Link to="/">Permits</Link>
              </CustomListItemButton>
              <CustomListItemButton>
                <Link to="/about">About</Link>
              </CustomListItemButton>
              <CustomListItemButton>
                <Link to="/orders">Acquire Permit</Link>
              </CustomListItemButton>
              <CustomListItemButton>
                <Link to="/vehicles">Vehicles</Link>
              </CustomListItemButton>
              <CustomListItemButton>
                <Link to="/companies">Companies</Link>
              </CustomListItemButton>
            </CustomList>
          </CustomDrawer>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </CustomAppBar>
    </Box>
  );
}