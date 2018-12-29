import { takeEvery, takeLatest, call, fork, put } from 'redux-saga/effects';
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

function* createUser(action) {
  try {
    yield call(api.createUser, { firstName: action.payload.firstName, lastName: action.payload.lastName });
    yield call(getUsers)
  } catch (error) {
    console.log('error comming from saga', error)
  }
}

function* watchCreateUsersRequest() {
  yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
}

const usersSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateUsersRequest)
]

export default usersSagas;
