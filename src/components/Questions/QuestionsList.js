import React from 'react';
import QuestionCard from './QuestionsListItem';
import Typography from '@material-ui/core/Typography';

export default function QuestionList(props) {
  const { questions } = props;

  return (
    <>
      { questions.length ? questions.map(question => (
        <QuestionCard key={question.id} question={question} />
      )) : <Typography> No questions here. Check the other tab :) </Typography>
    }
    </>
  );
}
