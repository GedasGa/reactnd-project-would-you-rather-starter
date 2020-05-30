import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { addQuestion } from '../actions/questions';

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginLeft: 'auto',
  },
}));

const AddQuestion = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const user = useSelector(state => state.authedUser && state.users ? state.users[state.authedUser] : null);

  const [optionOne, setOptionOne] = React.useState('');
  const [optionTwo, setOptionTwo] = React.useState('');

  const handleOptionOneChange = (event) => {
    setOptionOne(event.target.value);
  };

  const handleOptionTwoChange = (event) => {
    setOptionTwo(event.target.value);
  };

  const handleFormSubmit = () => {
    dispatch(addQuestion(user.id, optionOne, optionTwo));
    setOptionOne('');
    setOptionTwo('');
  }

 return (
  <Card className={classes.card}>
    <CardHeader
      avatar={<Avatar alt={`avatar of ${user.name}`} src={ user.avatarURL }/>}
      title={<Typography variant="h5">Create a new question</Typography>}
    />
    <CardContent>
      <Typography variant="h6" color="textSecondary">
        Would You Rather
      </Typography>
        <TextField
          id="optionOne"
          label="Option one"
          type="text"
          value={optionOne}
          onChange={handleOptionOneChange}
          margin="normal"
          fullWidth
        />
        <Typography variant="h6" color="textSecondary">
          or
        </Typography>
        <TextField
          id="optionTwo"
          label="Option two"
          type="text"
          value={optionTwo}
          onChange={handleOptionTwoChange}
          margin="normal"
          fullWidth
        />
        <CardActions>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleFormSubmit}
            className={classes.button}
            disabled={!optionOne || !optionTwo}
          >
            Create a question
          </Button>
      </CardActions>
    </CardContent>
  </Card>
 );
};

export default AddQuestion;
