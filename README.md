# react-redux-sagas
React application following the Udemy tutorial from Tom Philips to explain the Saga's functionality. Demo on https://silvestrevivo.github.io/react-redux-sagas/
****
## Explanation

### "takeEvery"
__Use this when:__ You want to watch for EVERY time a specific redux action was dispatched.

__Use case:__ Getting / fetching a list of data from an API.

__Example:__
```javascript
function* watchGetUsersRequest(){
    yield takeEvery(action.Types.GET_USERS_REQUEST, getUsers);
}
```
### "takeLatest"

__Use this when:__ There's the potential for a redux action to be dispatched multiple times in a short period and could potentially initiate the running of multiple instances of the same saga - use takeLatest to ONLY take the latest currently running saga for the associated dispatched redux action.

__Use cases:__ Creating or updating a record, or If you have a complex app that queries the same API endpoint from multiple components at the same time - for example if you have a navbar that displays the currently logged in user's name, but the user is viewing a 'settings' page to view their personal details meaning both the navbar and the settings page will query the same API endpoint - you'll generally want to take the latest call for that data.

__Example:__
```javascript
function* watchGetLoggedInUserRequest(){
    yield takeLatest(action.Types.GET_LOGGED_IN_USER_REQUEST, getLoggedInUser);
}
```

### Blocking saga with "take"

__Use this when:__ You want to watch for a particular redux action to be dispatched, but you don't want to listen for that same dispatched action again until the currently running saga for that action has complete. You're "blocking" the ability to watch for when that particular redux action is dispatched until the currently running saga for that redux action has complete.

__Use case:__Deleting a user, or accepting a payment. Generally you don't want to be able to accept multiple, simultaneous payments - you'd want to wait for the current transaction to complete before allowing the ability to accept another payment.

__Example:__
```javascript
function* watchGetLoggedInUserRequest(){
    while(true){
    const {userId} = yield take(action.Types.DELETE_USER_REQUEST);
        yield call(deleteUser, {userId});
    }
}
```

### "call"

__Use this when:__ You want to call a function or a promise but want to wait for that function or promise to finish running before executing the next line of code.

__Use case:__ In conjunction with "take" and blocking saga, or calling a promise within a worker saga that queries an API endpoint.

__Examples:__
```javascript
function* deleteUser({userId}){
    try{
        const result = yield call(api.deleteUser, userId);
    }catch(e){

    }
}

function* watchDeleteUserRequest(){
    while(true){
        const {userId} = yield take(action.Types.DELETE_USER_REQUEST);
        yield call(deleteUser, {userId});
    }
}
```

### "put"

__Use this when:__ You want to dispatch a redux action from within a redux saga.

__Use case:__ Any time you want to update your redux state - usually after a call to an API resolves and you want to update your redux state with the resulting data from the API.

__Examples:__
```javascript
function* getUsers(){
    try{
        const result = yield call(api.getUsers);
        yield put(actions.getUsersSuccess({
            users: result.data.users
        }));
    }catch(e){
        yield put(actions.usersError({
            error: ' An error occurred when trying to delete the user'
        }))
    }
}
```
