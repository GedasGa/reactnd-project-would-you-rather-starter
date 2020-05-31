import { getInitialData } from '../utils/api';
import { setAuthedUser } from '../actions/authedUser';
import { receiveUsers } from '../actions/users';
import { receiveQuestions } from '../actions/questions';

const AUTHED_ID = 'sarahedo';

export const handleInitialData = () => (dispatch) => 
  getInitialData()
    .then(({ users, questions }) => {
      dispatch(receiveUsers(users))
      dispatch(receiveQuestions(questions))
      dispatch(setAuthedUser(AUTHED_ID))
    });
