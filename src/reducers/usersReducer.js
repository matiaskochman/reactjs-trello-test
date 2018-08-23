import {
  FETCH_USERS,
  FETCH_USERS_ERROR,
  CHANGE_USER_STATE,
  APPLIED_STATE,
} from 'actions/types';

export default function (state = { userList: [], conexionError: false }, action) {
  switch (action.type) {
    case CHANGE_USER_STATE: {
      const user = action.payload;
      const updatedUserList = state.userList.filter((usr) => {
        return user.id.value !== usr.id.value;
      });
      //return [...updatedUserList, user];
      return {
        userList: [...updatedUserList, user],
        conexionError: false
      };
    }
    case FETCH_USERS: {
      const users = action.payload.results;
      const processedUsers = users.map((user) => {
        return { ...user, state: APPLIED_STATE };
      });
      //return [...state, ...processedUsers];
      return {
        userList: [...state, ...processedUsers],
        conexionError: false
      };
    }
    case FETCH_USERS_ERROR: {
      //return state;
      return {
        userList: [],
        conexionError: true
      }
    }
    default:
      return state;
  }
}
