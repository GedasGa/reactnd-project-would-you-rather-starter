import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import MenuAppBar from '../../components/MenuBar/MenuAppBar';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '1280px',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <MenuAppBar />
    </Container>
  );
}

export default App;
