import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import handleInitialData from '../../actions/shared';

import MenuAppBar from '../../components/MenuBar/MenuAppBar';
import TabPanel from '../../components/TabPanel';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '1280px',
  },
}));

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  // const users = useSelector(state => state.users);
  // const questions = useSelector(state => state.questions);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <Container maxWidth="md">
      <MenuAppBar />
      <TabPanel />
    </Container>
  );
}

export default App;
