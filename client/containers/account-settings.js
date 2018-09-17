import React, { Component } from 'react'
import { Row, Col, Button, Form, FormGroup, Input, Container } from 'reactstrap'

export default class AccountSettings extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleDelete(event) {
    event.preventDefault()
    const { navigate, deleteUser, user: { id } } = this.props
    const url = '/artists/' + id
    const req = { method: 'DELETE' }
    fetch(url, req)
      .then(res => res.ok)
      .then(deleteUser())
      .catch(err => console.error(err))
    alert('Your profile has been deleted.')
    navigate({ path: '' })
  }
  render() {
    const { handleDelete } = this
    const { user } = this.props
    return (
      <Container>
        <Row>
          <Col className="mx-auto form-top-margin" md="6">
            <h5 className="font-weight-bold">Account Settings</h5>
            <Form onSubmit={handleDelete} className="mb-5">
              <FormGroup>
                <Input type="text" name="firstName" id="first-name" defaultValue={user.firstName}/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="lastName" id="last-name" defaultValue={user.lastName}/>
              </FormGroup>
              <FormGroup>
                <Input type="email" name="email" id="email" defaultValue={user.email}/>
              </FormGroup>
              <Button className="btn btn-outline-dark btn-sm" type="submit">Delete Account</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}
