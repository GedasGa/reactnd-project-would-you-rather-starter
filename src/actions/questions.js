export const QUESTIONS_RECEIVED = 'QUESTIONS_RECEIVED';

export const receiveQuestions = (quetions) => ({
  type: QUESTIONS_RECEIVED,
  payload: quetions,
});
