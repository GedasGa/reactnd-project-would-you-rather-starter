import { saveQuestion } from '../utils/api';

export const QUESTIONS_RECEIVED = 'QUESTIONS_RECEIVED';
export const QUESTION_ADDED = 'QUESTION_ADDED';

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
