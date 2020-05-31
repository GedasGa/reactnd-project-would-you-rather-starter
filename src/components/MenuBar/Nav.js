import React from 'react';
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  active: {
    backgroundColor: theme.palette.background.default,
  },
  link: {
    textDecoration: 'none',
    padding: theme.spacing(2, 3),
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const Nav = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <div className={classes.navContainer}>
          <NavLink to='/' exact activeClassName={classes.active} className={classes.link}>
            Home
          </NavLink>
          <NavLink to='/add' activeClassName={classes.active} className={classes.link}>
            New Question
          </NavLink>
          <NavLink to='/leaderboard' activeClassName={classes.active} className={classes.link}>
            Leader Board
          </NavLink>
        </div>
      </AppBar>
    </div>
  );
}

export default Nav;
