import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsersRequest, createUserRequest, deleteUserRequest } from '../actions/users'
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';

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

  render() {
    const { users } = this.props;
    return (
      <div style={{ margin: '0px auto', padding: '20px', maxWidth: '600px' }}>
        <NewUserForm onSubmit={this.handleSubmit} />
        <UsersList users={users.items} onDeleteUser={this.handleDeleteUserClick} />
      </div>
    );
  }
}

export default connect(
  ({ users }) => ({ users }),
  { getUsersRequest, createUserRequest, deleteUserRequest })(App);
