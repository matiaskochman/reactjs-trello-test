import axios from 'axios';
import { 
    FETCH_USERS,
    CHANGE_USER_STATE,
    FETCH_USERS_ERROR
} from 'actions/types';

const URL = 'https://randomuser.me/api/?nat=gb&results=5';
export function fetchUsers(){
    return function(dispatch){
        axios.get(URL)
        .then((response) => {
          dispatch(getUsersSuccess(response))
        })
        .catch((err) => {
          dispatch(getUsersError(err))
        })        
    }
}


function getUsersSuccess(response) {
    return {
      type: FETCH_USERS,
      payload: response
    }
  }
  
function getUsersError(err) {
    return {
        type: FETCH_USERS_ERROR,
        payload: err
    }
}
  