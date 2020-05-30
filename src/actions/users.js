export const USERS_RECEIVED = 'USERS_RECEIVED';

export const receiveUsers = (users) => ({
  type: USERS_RECEIVED,
  payload: users,
});
