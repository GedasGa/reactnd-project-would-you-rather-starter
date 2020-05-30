export const AUTHED_USER_SET = 'AUTHED_USER_SET';

export const setAuthedUser = (id) => ({
  type: AUTHED_USER_SET,
  payload: id,
});

