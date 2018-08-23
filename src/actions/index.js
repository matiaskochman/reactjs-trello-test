import axios from 'axios';
import { 
    FETCH_USERS,
    CHANGE_USER_STATE,
    FETCH_USERS_ERROR,
    FETCH_USERS_SAGA
} from 'actions/types';


export function fetchUsers(dispatch){
    return {
        type: FETCH_USERS_SAGA
    }
}
