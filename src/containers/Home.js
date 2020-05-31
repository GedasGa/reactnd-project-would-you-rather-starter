import React from 'react';
import { useSelector } from 'react-redux';

import Tabs from '../components/Questions/QuestionsTabs';

import { formatQuestion } from '../utils/helpers';

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

const getAndFormatQuestionsByIds = ((questions, users, quetionsIds) => 
 quetionsIds.map(questionId => {
    const question = questions[questionId];
    if (question) {
      return formatQuestion(users[question.author], question);
    }
    return null;
  })
);


const Home = () => {

  const questions = useSelector(state => state.questions);
  const users = useSelector(state =>  state.users);
  const user = useSelector(state => state.authedUser && state.users ? state.users[state.authedUser] : null);


  const answeredQuestionsIds = filterAndSortAnsweredQuestions(questions, user);
  const unansweredQuestionsIds = filterAndSortUnansweredQuestions(questions, user);

  const answeredQuestions = answeredQuestionsIds.length ? 
    getAndFormatQuestionsByIds(questions, users, answeredQuestionsIds) 
    : [];

  const unansweredQuestions = unansweredQuestionsIds.length ? 
    getAndFormatQuestionsByIds(questions, users, unansweredQuestionsIds) 
    : [];

  return (
    <Tabs
      answeredQuestions={answeredQuestions}
      unansweredQuestions={unansweredQuestions}
    />
  );
};

export default Home;
