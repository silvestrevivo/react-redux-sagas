import React, { Component } from 'react'
import { Form, Label, Input, FormGroup, Button } from 'reactstrap';

let initial_state = {
  firstName: '',
  lastName: ''
}

class NewUserForm extends Component {
  state = initial_state

  handleState = event => {
    let { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const { firstName, lastName } = this.state
    const { onSubmit } = this.props
    onSubmit({ firstName, lastName })
    this.setState({ ...initial_state })
  }

  render() {
    const { firstName, lastName } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>
            First Name
        </Label>
          <Input
            required
            type="text"
            value={firstName}
            name="firstName"
            placeholder="First Name"
            onChange={this.handleState} />
          <Label>
            Last Name
        </Label>
          <Input
            required
            type="text"
            value={lastName}
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleState} />
        </FormGroup>
        <FormGroup>
          <Button block outline type="submit" color="primary">
            Create
          </Button>
        </FormGroup>
      </Form>
    )
  }
}

export default NewUserForm
