import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import { setAuthedUser } from '../actions/authedUser';

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginLeft: 'auto',
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [user, setUser] = React.useState('');

  const users = useSelector(state => state.users);

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const handleLogin = () => {
    dispatch(setAuthedUser(user));
    props.history.push('/');
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        title="Login"
      />
      <CardContent>
      <TextField
        id="user-select"
        select
        value={user}
        onChange={handleChange}
        helperText="Please select a user"
        fullWidth
      >
        {users && Object.keys(users).map(id => (
          <MenuItem key={id} value={id}>
            {users[id].name}
          </MenuItem>
        ))}
      </TextField>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleLogin}
          className={classes.button}
          disabled={!user}
        >
          Login
        </Button>
      </CardActions>
    </Card>
  );
}

export default withRouter(Login);
