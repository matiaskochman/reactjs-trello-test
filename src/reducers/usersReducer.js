import {
  FETCH_USERS,
  FETCH_USERS_ERROR,
  CHANGE_USER_STATE,
  APPLIED_STATE,
  INTERVIEWING_STATE,
  HIRED_STATE
} from 'actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case CHANGE_USER_STATE:
      return [...state, action.payload];
    case FETCH_USERS: {
      const users = action.payload.results;
      const processedUsers = users.map((user) => {
        return { ...user, state: APPLIED_STATE };
      });
      return [...state, ...processedUsers];
    }
    case FETCH_USERS_ERROR: {
      return state;
    }
    default:
      return state;
  }
}
