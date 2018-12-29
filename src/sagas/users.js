import { takeEvery, call, fork } from 'redux-saga/effects';
import * as actions from '../actions/users'
import * as api from '../api/users';

function* getUsers() { // this is a worker
  try {
    const result = yield call(api.getUsers);
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

function* watchGetUsersRequest() { // this is a watcher
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

const usersSagas = [
  fork(watchGetUsersRequest)
]

export default usersSagas;