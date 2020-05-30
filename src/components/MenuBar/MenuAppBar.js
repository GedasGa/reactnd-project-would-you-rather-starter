import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';

import Nav from './Nav';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    height: theme.spacing(4),
    width: theme.spacing(4),
  }
}));

const MenuAppBar = ({ user, handleLogout }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogoutClick = () => {
    handleLogout();
    handleClose()
  };

  const openLoginModal = () => {
    // handleLogout();
    // handleClose()
    window.alert('open... now');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Whould you rather?
        </Typography>
        {user ? (
          <div>
            <IconButton
              aria-label={`account of ${user.name}`}
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar alt={`avatar of ${user.name}`} src={ user.avatarURL } className={classes.avatar}/>
              <Typography variant="h6">
                { user.name }
              </Typography>
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
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={onLogoutClick}>Logout</MenuItem>
            </Menu>
          </div>
        ) : (
          <div>
            <IconButton
              aria-label="Login"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={openLoginModal}
              color="inherit"
            >
              <Avatar 
                alt="blank avatar" 
                src="https://image.flaticon.com/icons/png/512/3003/3003078.png"
                className={classes.avatar}
              />
              Login
            </IconButton>
          </div>
        )
      }
      </Toolbar>
      {user && (
        <Nav /> 
      )}
    </AppBar>
  );
}

export default MenuAppBar;
