export const Types = {
  GET_USERS_REQUEST: 'users/get_users_request',
  GET_USERS_SUCCESS: 'users/get_users_success',
  CREATE_USER_REQUEST: 'user/create_users_request',
  DELETE_USER_REQUEST: 'user/delete_users_request',
}

export const getUsersRequest = () => ({
  type: Types.GET_USERS_REQUEST
})

export const getUsersSuccess = ({ items }) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: {
    items
  }
})

export const createUserRequest = ({ firstName, lastName }) => ({
  type: Types.CREATE_USER_REQUEST,
  payload: {
    firstName,
    lastName
  }
})

export const deleteUserRequest = (userId) => ({
  type: Types.DELETE_USER_REQUEST,
  payload: { userId }
})
