import React, { Component } from 'react'
import { Row, Col, Button, Form, FormGroup, Input, Container } from 'reactstrap'

export default class AddMusic extends Component {
  constructor(props) {
    super(props)
    this.state = {}
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
      <Container>
        <Row>
          <Col className="mx-auto form-top-margin" md="6">
            <h5 className="font-weight-bold">Add Music</h5>
            <Form onSubmit={ handleDelete } className="mb-5">
              <FormGroup>
                <Input type="text" id="track1" defaultValue={ user.music }/>
              </FormGroup>
              <Button className="btn btn-outline-dark btn-sm" type="submit">Add Music</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}
