import React, { Component } from 'react'
import * as request from '../util/fetch'
import { Row, Col, Button, Form, FormGroup, Input, Container } from 'reactstrap'

export default class AddMusic extends Component {
  constructor(props) {
    super(props)
    this.addMusic = this.addMusic.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    const { addMusic } = this
    const { navigate, user } = this.props
    const addMusicForm = event.target
    const formData = new FormData(addMusicForm)
    const music = {}
    for (const pair of formData.entries()) {
      music[pair[0]] = pair[1]
    }
    addMusic(music)
    alert('Your music has been updated.')
    navigate({ path: '#' + user.displayName })
  }
  addMusic(music) {
    const { user: { displayName }, updateUser } = this.props
    const url = '/artists/' + displayName
    const req = {
      method: 'PUT',
      body: JSON.stringify(music),
      headers: { 'Content-Type': 'application/json' }
    }
    request.sendFetch(url, req)
      .then(user => updateUser(user))
  }
  render() {
    const { handleSubmit } = this
    const { user } = this.props
    const links = []
    for (const key in user) {
      if (key.startsWith('soundcloudLink')) {
        links.push(user[key])
      }
    }
    return (
      <Container>
        <Row>
          <Col className="mx-auto form-top-margin" md="6">
            <h5 className="font-weight-bold mb-3">Add Music</h5>
            <Form onSubmit={handleSubmit} className="mb-5">
              <FormGroup>
                <Input
                  className="form-control form-control-sm"
                  type="text" defaultValue={links[0] ? links[0] : ''}
                  placeholder="Add your Soundcloud embedd links here."
                  name="soundcloudLink1"/>
              </FormGroup>
              <FormGroup>
                <Input
                  className="form-control form-control-sm"
                  type="text"
                  defaultValue={links[1] ? links[1] : ''}
                  name="soundcloudLink2"/>
              </FormGroup>
              <FormGroup>
                <Input
                  className="form-control form-control-sm"
                  type="text"
                  defaultValue={links[2] ? links[2] : ''}
                  name="soundcloudLink3"/>
              </FormGroup>
              <FormGroup>
                <Input
                  className="form-control form-control-sm"
                  type="text" defaultValue={links[3] ? links[3] : ''}
                  name="soundcloudLink4"/>
              </FormGroup>
              <FormGroup>
                <Input
                  className="form-control form-control-sm"
                  type="text" defaultValue={links[4] ? links[4] : ''}
                  name="soundcloudLink5"/>
              </FormGroup>
              <Button
                className="btn btn-outline-dark btn-sm"
                type="submit">
                Add Music
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}
