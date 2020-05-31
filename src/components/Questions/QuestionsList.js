import React from 'react';

import QuestionCard from './QuestionsListItem';

export default function QuestionList(props) {
  // const classes = useStyles();
  
  const { questions } = props;

  return (
    <>
      { questions.length ? questions.map(question => (
        <QuestionCard key={question} question={question} />
      )) : 'No polls here. Keep looking'
    }
    </>
  );
}
