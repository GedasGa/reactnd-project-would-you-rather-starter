import { combineReducers } from 'redux';
import users from './users';
import questions from './questions';

const combinedReducers = combineReducers({
    users,
    questions,
})

export default combinedReducers;