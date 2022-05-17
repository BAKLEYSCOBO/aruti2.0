import { AppBar, Avatar, Badge, Divider, Grid, IconButton, InputBase, ListItemIcon, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';
import {Settings,PowerSettingsNew, Search,AccountCircle,NotificationsNone, PersonAdd, Logout} from '@mui/icons-material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Profile from '../image/pic-1.png';

const useStyles = makeStyles( theme => ({
  root: {
    backgroundColor: '#fff',
  },
  searchBar: {
    opacity: '0.6',
    padding: `0px ${theme.spacing(1)}px`,
    fontSize: '0.8rem',
    '&:hover':{
      backgroundColor: '#f2f2f2'
    },
    '& .MuiSvgIcon-root': {
      marginRight: '8px'
    }
  },
  searchIcon: {
    color: '#3780d4'
  }
}))


const Header = () => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (  
    <AppBar position='static' className={classes.root}>
        <Toolbar>
          <Grid container alignItems='center'>
            <Grid item>
              <InputBase 
                placeholder='Search anything here...'
                startAdornment={<Search className={classes.searchIcon}/>}
                fontSize='small'
                className={classes.searchBar}
              /> 
            </Grid>

            <Grid item sm></Grid>

            <Grid item>

            <IconButton> 
                <AccountCircle fontSize='small' 
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                />
              </IconButton>
              <Menu
                   anchorEl={anchorEl}
                   id="account-menu"
                   open={open}
                   onClose={handleClose}
                   onClick={handleClose}
                   PaperProps={{
                     elevation: 0,
                     sx: {
                       overflow: 'visible',
                       filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                       mt: 1.5,
                       '& .MuiAvatar-root': {
                         width: 32,
                         height: 32,
                         ml: -0.5,
                         mr: 1,
                       },
                       '&:before': {
                         content: '""',
                         display: 'block',
                         position: 'absolute',
                         top: 0,
                         right: 14,
                         width: 10,
                         height: 10,
                         bgcolor: 'background.paper',
                         transform: 'translateY(-50%) rotate(45deg)',
                         zIndex: 0,
                       },
                     },
                   }}
                   transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                   anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                  <MenuItem onClick={handleClose}> <Avatar/> Profile</MenuItem>
                  <MenuItem onClick={handleClose}> <Avatar/> My account</MenuItem>
                  <Divider/>

                  <MenuItem>
                    <ListItemIcon>
                    <PersonAdd fontSize="small" />
                    </ListItemIcon>
                     Add another account
                    </MenuItem>

                    <MenuItem>
                      <ListItemIcon>
                      <Settings fontSize="small" />
                      </ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem>
                     <ListItemIcon>
                     <Logout fontSize="small" />
                     </ListItemIcon>
                     Logout
                    </MenuItem>
              </Menu>


              <IconButton> 
              <Badge badgeContent={2} color="primary">
                <NotificationsNone fontSize='small'/>
              </Badge>
              </IconButton>


             

              <IconButton> 
              <Badge  color="secondary">
                <PowerSettingsNew fontSize='small'/>
              </Badge>
              </IconButton>
              
            </Grid>

          </Grid>
        </Toolbar>
    </AppBar>
  )
}

export default Header