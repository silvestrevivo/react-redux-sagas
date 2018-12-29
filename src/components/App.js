import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsersRequest } from '../actions/users'

class App extends Component {
  componentDidMount() {
    this.props.getUsersRequest()
  }
  render() {
    return (
      <div className="App">
        test
      </div>
    );
  }
}

export default connect(null, { getUsersRequest })(App);
