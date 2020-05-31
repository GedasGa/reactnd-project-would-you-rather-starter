import { saveQuestion, saveQuestionAnswer } from '../utils/api';

export const QUESTIONS_RECEIVED = 'QUESTIONS_RECEIVED';
export const QUESTION_ADDED = 'QUESTION_ADDED';
export const QUESTION_ANSWERED = 'QUESTION_ANSWERED';

export const receiveQuestions = (questions) => ({
  type: QUESTIONS_RECEIVED,
  payload: questions,
});

export const addQuestionFulfilled = (payload) => ({
  type: QUESTION_ADDED,
  payload,
});

export const addQuestion = (author, optionOne, optionTwo) => (dispatch) =>
  saveQuestion({
    author,
    optionOneText: optionOne,
    optionTwoText: optionTwo,
  })
  .then(response => dispatch(addQuestionFulfilled(response)));


export const answerQuestionFulfilled = (payload) => ({
  type: QUESTION_ANSWERED,
  payload,
});

export const answerQuestion = (author, questionId, answer) => (dispatch) =>
  saveQuestionAnswer({
    authedUser: author,
    qid: questionId,
    answer,
  })
  .then(() => 
    dispatch(answerQuestionFulfilled({
      authedUser: author,
      qid: questionId,
      answer,
    }))
  );