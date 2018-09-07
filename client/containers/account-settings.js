import React, { Component } from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap'

export default class AccountSettings extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleDelete(event) {
    event.preventDefault()
    const { deleteProfile, navigate } = this.props
    deleteProfile()
    alert('Your profile has been deleted.')
    navigate({ path: '' })
  }
  render() {
    const { handleDelete } = this
    const { user } = this.props
    return (
      <div className="form-container mx-auto">
        <div className="row">
          <div className="col-6 mx-auto ">
            <Form onSubmit={ handleDelete } className="mb-5">
              <FormGroup>
                <Input type="text" name="firstName" id="first-name" defaultValue={ user.firstName }/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="lastName" id="last-name" defaultValue={ user.lastName }/>
              </FormGroup>
              <FormGroup>
                <Input type="email" name="email" id="email" defaultValue={ user.email }/>
              </FormGroup>
              <Button className="btn btn-outline-dark btn-sm" type="submit">Delete Account</Button>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}
