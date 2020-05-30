import React from 'react';
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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
  }
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
          <Tabs aria-label="app navigation" centered>
            <NavLink to='/' exact activeClassName={classes.active} className={classes.link}>
              <Tab label="Home" />
            </NavLink>
            <NavLink to='/add' activeClassName={classes.active} className={classes.link}>
              <Tab label="New Question" />
            </NavLink>
            <NavLink to='/leaderboard' activeClassName={classes.active} className={classes.link}>
              <Tab label="Leader Board" />
            </NavLink>
          </Tabs>
      </AppBar>
    </div>
  );
}

export default Nav;
