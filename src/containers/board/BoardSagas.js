import { delay } from 'redux-saga';
import { put, takeEvery, all, call,takeLatest  } from 'redux-saga/effects';
import axios from 'axios';
import { 
    FETCH_USERS,
    CHANGE_USER_STATE,
    FETCH_USERS_ERROR,
    FETCH_USERS_SAGA
} from 'actions/types';

const URL = 'https://randomuser.me/api/?nat=gb&results=5';

function* fetchUsersAsync(action) {

  try{
    let usersRequest = yield call(axios.get,URL);
    yield put(
        {
            type:'FETCH_USERS',
            payload:usersRequest.data
        }
    )
  } catch (e){
    console.error(e);
  }
}


function* watchFetchUsersAsync() {
  yield takeLatest('FETCH_USERS_SAGA', fetchUsersAsync)
}

export default function* postsSaga() {
  yield all([
    watchFetchUsersAsync()
  ])
}
