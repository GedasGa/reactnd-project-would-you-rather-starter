import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import NotFound from './NotFound';

import { answerQuestion } from '../actions/questions';
import { formatQuestion } from '../utils/helpers';

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginLeft: 'auto',
  },
}));

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={100}>
        <Typography variant="body2" color="textSecondary">
          {`${Math.round(props.value,)}%`}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {`${props.votes} vote(s)`}
        </Typography>
      </Box>
    </Box>
  );
}

const Question = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { question_id } = props.match.params

  const [value, setValue] = React.useState('');

  const question = useSelector(state => state.questions[question_id]);
  const users = useSelector(state => state.users);
  const user = useSelector(state => state.authedUser && state.users ? state.users[state.authedUser] : null);

  if(!question) {
    return (<NotFound />);
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleAnswerSubmit = () => {
    dispatch(answerQuestion(user.id, question.id, value));
  };

  const isAnswered = user && user.answers[question_id] ? true : false;
  const questionFormatted = formatQuestion(users[question.author], question);

  const totalAnswers = questionFormatted.optionOne.votes.length + questionFormatted.optionTwo.votes.length;
  const optionOnePercentage = (questionFormatted.optionOne.votes.length / totalAnswers) * 100;
  const optionTwoPercentage = (questionFormatted.optionTwo.votes.length / totalAnswers) * 100;

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar alt={`avatar of ${questionFormatted.name}`} src={questionFormatted.avatarURL} />}
        title={`${questionFormatted.name} asks:`}
        subheader={new Date(questionFormatted.timestamp).toDateString()}
      />
      {
        !isAnswered ? (
          <CardContent>
            <Typography variant="h6" color="textSecondary">
              Would you rather
            </Typography>
            <FormControl component="fieldset">
                <RadioGroup aria-label="answer options" name="answer" value={value} onChange={handleChange}>
                  <FormControlLabel 
                    value="optionOne" 
                    control={<Radio color="primary" />} 
                    label={questionFormatted.optionOne.text} 
                  />
                  <FormControlLabel 
                    value="optionTwo" 
                    control={<Radio color="primary" />} 
                    label={questionFormatted.optionTwo.text}
                  />
                </RadioGroup>
              </FormControl>
          </CardContent>
        ) : (
          <CardContent>
            <Typography variant="h6" color="textSecondary">
              Would you rather
            </Typography>
            <Typography variant="h5">
              {questionFormatted.optionOne.text}
              {questionFormatted.optionOne.votes.includes(user.id) && (
                <CheckCircleIcon color="primary" />
              )}
            </Typography>
            <LinearProgressWithLabel 
              value={optionOnePercentage}
              votes={questionFormatted.optionOne.votes.length}
            />
            <Typography variant="h6" color="textSecondary">
              or
            </Typography>
            <Typography variant="h5">
              {questionFormatted.optionTwo.text}
              {questionFormatted.optionTwo.votes.includes(user.id) && (
                <CheckCircleIcon color="primary" />
              )}
            </Typography>
            <LinearProgressWithLabel 
              value={optionTwoPercentage} 
              votes={questionFormatted.optionTwo.votes.length}
            />
          </CardContent>
        )
      }
      {
        !isAnswered && (
          <CardActions disableSpacing>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleAnswerSubmit}
              disabled={!value}
              className={classes.button}
            >
              Submit answer
            </Button>
          </CardActions>
        )
      }
    </Card>
  );
}

export default Question;
