import {
  CHANGE_USER_STATE,
  FETCH_USERS_SAGA
} from 'actions/types';


export function fetchUsers() {
  return {
    type: FETCH_USERS_SAGA
  };
}
export function changeUserState(user, newState) {
  user.state = newState;
  return {
    type: CHANGE_USER_STATE,
    payload: user
  };
}
