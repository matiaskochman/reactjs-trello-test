import {
  put, all, call, takeLatest
} from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_USERS,
  FETCH_USERS_ERROR,
  FETCH_USERS_SAGA
} from 'actions/types';

const URL = 'https://randomuser.me/api/?nat=gb&results=500';

function* fetchUsersAsync() {
  try {
    const usersRequest = yield call(axios.get, URL);
    yield put(
      {
        type: FETCH_USERS,
        payload: usersRequest.data
      }
    );
  } catch (err) {
    console.error(err);
    yield put(
      {
        type: FETCH_USERS_ERROR,
        payload: err.response
      }
    );
  }
}


function* watchFetchUsersAsync() {
  yield takeLatest(FETCH_USERS_SAGA, fetchUsersAsync);
}

export default function* postsSaga() {
  yield all([
    watchFetchUsersAsync()
  ]);
}
