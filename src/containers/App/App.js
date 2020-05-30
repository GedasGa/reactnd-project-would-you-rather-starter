import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import handleInitialData from '../../actions/shared';

import MenuAppBar from '../../components/MenuBar/MenuAppBar';
import TabPanel from '../../components/TabPanel';

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

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const users = useSelector(state => state.users);
  const questions = useSelector(state => state.questions);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <Container maxWidth="md">
      <MenuAppBar />
      <TabPanel />
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/leaderboard' component={Leaderboard} />
          <Route path='/add' component={AddQuestion} />
          <Route path='/questions/:question_id' component={Question} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
