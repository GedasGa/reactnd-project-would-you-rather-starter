import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 500,
    marginBottom: theme.spacing(2),
  },
  linkButton: {
    marginLeft: 'auto',
    textDecoration: 'none',
  },
}));

export default function QuestionListItem(props) {
  const classes = useStyles();

  const { question } = props;

  console.log(question);

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar alt={`avatar of ${question.name}`} src={question.avatarURL} />}
        title={question.name}
        subheader={new Date(question.timestamp).toDateString()}
      />
      <CardContent>
        <Typography variant="h6" color="textSecondary">
          Would you rather
        </Typography>
        <Typography variant="h5">
          {question.optionOne.text}
        </Typography>
        <Typography variant="h6" color="textSecondary">
          or
        </Typography>
        <Typography variant="h5">
          {question.optionTwo.text}?
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Link
          to={`/questions/${question.id}`}
          className={classes.linkButton}
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            
          >
            Open question
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
