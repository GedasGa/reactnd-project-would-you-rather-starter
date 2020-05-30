import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { handleInitialData } from '../../actions/shared';
import { setAuthedUser } from '../../actions/authedUser';

import MenuAppBar from '../../components/MenuBar/MenuAppBar';

import AddQuestion from '../AddQuestion';
import Home from '../Home';
import Leaderboard from '../Leaderboard';
import NotFound from '../NotFound';
import Question from '../Question';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '1280px',
  },
}));

function App(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  // const users = useSelector(state => state.users);
  // const questions = useSelector(state => state.questions);
  const user = useSelector(state => state.authedUser && state.users ? state.users[state.authedUser] : null);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(setAuthedUser(null));
    props.history.push('/');
  };

  return (
    <Container maxWidth="lg">
      <MenuAppBar user={user} handleLogout={handleLogout} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/leaderboard' component={Leaderboard} />
          <Route path='/add' component={AddQuestion} />
          <Route path='/questions/:question_id' component={Question} />
          <Route component={NotFound} />
        </Switch>
    </Container>
  );
};

export default withRouter(App);
