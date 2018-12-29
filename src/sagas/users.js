import { takeEvery, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions/users'
import * as api from '../api/users';

function* getUsers() { // this is a worker
  try {
    const result = yield call(api.getUsers);
    console.log('result comming from saga', result.data.data)
    yield put(actions.getUsersSuccess({
      items: result.data.data
    }))
  } catch (error) {
    console.log('error comming from saga', error)
  }
}

function* watchGetUsersRequest() { // this is a watcher
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

const usersSagas = [
  fork(watchGetUsersRequest)
]

export default usersSagas;
