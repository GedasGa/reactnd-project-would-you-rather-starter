import React from 'react';
import { useSelector } from 'react-redux';

import Tabs from '../components/Questions/QuestionsTabs';

// TODO: modify this funtions to filter Answered or unanswered questions
const filterAndSortAnsweredQuestions = ((questions, user) => 
  Object.keys(questions)
    .filter(
      id =>
        questions[id].optionOne.votes.includes(user) ||
        questions[id].optionTwo.votes.includes(user)
    )
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
);

const filterAndSortUnansweredQuestions = ((questions, user) => 
  Object.keys(questions)
    .filter(
      id =>
        !questions[id].optionOne.votes.includes(user) ||
        !questions[id].optionTwo.votes.includes(user)
    )
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
);

const Home = () => {

  const questions = useSelector(state => state.questions);
  const user = useSelector(state => state.authedUser && state.users ? state.users[state.authedUser] : null);

  const answeredQuestionsIds = filterAndSortAnsweredQuestions(questions, user);
  const unansweredQuestionsIds = filterAndSortUnansweredQuestions(questions, user);

  console.log('answeredQuestions', answeredQuestionsIds);
  console.log('unansweredQuestions', unansweredQuestionsIds);

  // TODO: get questions informations
  const answeredQuestions = [];
  const unansweredQuestions = [];

  return (
    <Tabs
      answeredQuestions={answeredQuestions}
      unansweredQuestions={unansweredQuestions}
    />
  );
};

export default Home;