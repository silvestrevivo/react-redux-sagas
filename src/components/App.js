import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  usersError
} from '../actions/users'
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';
import { Alert } from 'reactstrap';

class App extends Component {
  componentDidMount() {
    this.props.getUsersRequest()
  }

  handleSubmit = ({ firstName, lastName }) => {
    this.props.createUserRequest({ firstName, lastName });
  }

  handleDeleteUserClick = (userId) => {
    this.props.deleteUserRequest(userId);
  }

  handleCloseAlert = () => {
    this.props.usersError({
      error: ''
    })
  }

  render() {
    const { users } = this.props;
    return (
      <div style={{ margin: '0px auto', padding: '20px', maxWidth: '600px' }}>
        <Alert color="danger" isOpen={!!this.props.users.error} toggle={this.handleCloseAlert}>
          {this.props.users.error}
        </Alert>
        <NewUserForm onSubmit={this.handleSubmit} />
        <UsersList users={users.items} onDeleteUser={this.handleDeleteUserClick} />
      </div>
    );
  }
}

export default connect(
  ({ users }) => ({ users }),
  { getUsersRequest, createUserRequest, deleteUserRequest, usersError })(App);
