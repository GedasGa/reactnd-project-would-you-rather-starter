import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import { handleInitialData } from '../../actions/shared';
import { setAuthedUser } from '../../actions/authedUser';

import MenuAppBar from '../../components/MenuBar/MenuAppBar';

import AddQuestion from '../AddQuestion';
import Home from '../Home';
import Login from '../Login';
import Leaderboard from '../Leaderboard/Leaderboard';
import NotFound from '../NotFound';
import Question from '../Question';

function App(props) {
  const dispatch = useDispatch();

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
        {user ? (
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/leaderboard' component={Leaderboard} />
            <Route path='/add' component={AddQuestion} />
            <Route path='/questions/:question_id' component={Question} />
            <Route component={NotFound} />
          </Switch>
        ) : (
          <Login />
        )}
    </Container>
  );
};

export default withRouter(App);
