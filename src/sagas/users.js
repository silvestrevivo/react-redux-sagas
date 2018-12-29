import { takeEvery, takeLatest, take, call, fork, put } from 'redux-saga/effects';
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

function* deleteUser({ userId }) {
  try {
    yield call(api.deleteUser, userId);
    yield call(getUsers);
  } catch (error) {
    console.log('error comming from saga', error)
  }
}

function* watchDeleteUserRequest() {
  while (true) {
    // take provides the action which was dispatched
    // is a low level effects from saga (compared with takeLatest or takeEvery)
    const action = yield take(actions.Types.DELETE_USER_REQUEST);
    yield call(deleteUser, {
      userId: action.payload.userId
    })
  }
  // wrapping the watcher in a while loop, we avoid to get in in the function
  // again till the sagas is resolved (we are blocking to delete other users
  // till one user is deleted)
}

const usersSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateUsersRequest),
  fork(watchDeleteUserRequest)
]

export default usersSagas;
