import React, { Component } from 'react'
import { Row, Col, Button, Form, FormGroup, Input, Container } from 'reactstrap'

export default class AddMusic extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleAddMusic = this.handleAddMusic.bind(this)
  }
  handleAddMusic(event) {
    event.preventDefault()
    const { navigate, addMusic } = this.props
    const addMusicForm = event.target
    const formData = new FormData(addMusicForm)
    const music = {}
    for (const pair of formData.entries()) {
      music[pair[0]] = pair[1]
    }
    console.log(music)
    addMusic(music)
    alert('Your music has been updated.')
    navigate({ path: 'view-profile' })
  }
  render() {
    const { handleAddMusic } = this
    return (
      <Container>
        <Row>
          <Col className="mx-auto form-top-margin" md="6">
            <h5 className="font-weight-bold">Add Music</h5>
            <Form onSubmit={ handleAddMusic } className="mb-5">
              <FormGroup>
                <Input type="text" placeholder="Add your Soundcloud embedd links here." name="soundcloudLink1"/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="soundcloudLink2"/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="soundcloudLink3"/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="soundcloudLink4"/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="soundcloudLink5"/>
              </FormGroup>
              <Button className="btn btn-outline-dark btn-sm" type="submit">Add Music</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}
