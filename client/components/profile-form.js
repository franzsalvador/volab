import React from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Container, Col } from 'reactstrap'

export default class ProfileForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }
  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value })
  }
  handleSubmit(event) {
    event.preventDefault()
    const { createProfile, navigate } = this.props
    const createProfileForm = event.target
    const formData = new FormData(createProfileForm)
    const user = {}
    for (const pair of formData.entries()) {
      user[pair[0]] = pair[1]
      user.followers = []
      user.following = []
    }
    createProfile(user)
    navigate({ path: 'add-music' })
    alert('Your profile has been saved.')
  }
  handleUpdate(event) {
    event.preventDefault()
    const { displayName } = this.props.user
    const { updateProfile, navigate } = this.props
    const createProfileForm = event.target
    const formData = new FormData(createProfileForm)
    const user = {}
    for (const pair of formData.entries()) {
      user[pair[0]] = pair[1]
    }
    updateProfile(user)
    alert('Your profile has been updated.')
    navigate({ path: 'view-profile', params: { displayName } })
  }
  render() {
    const { handleChange, handleSubmit, handleUpdate } = this
    const { path, user, registeredUser } = this.props
    const { imageUrl } = this.state
    return (
      <Container>
        <h5 className="save-edit-header font-weight-bold">{registeredUser !== true ? 'Create Profile' : 'Edit Profile'}</h5>
        <Row>
          <Col>
            {imageUrl ? (
              <div className="profile-image rounded-circle mx-auto" style={{backgroundImage: `url(${imageUrl})`}}></div>
            ) : (
              <div className="image-preview-box-empty mx-auto rounded-circle mb-5 border">
                <i className="fas fa-camera upload-photo-icon"></i>
              </div>
            )}
          </Col>
          <Col md="6" className="mx-auto">
            <Form onSubmit={path === 'update-profile' ? handleUpdate : handleSubmit} className="mb-5">
              <FormGroup>
                <Label for="artistType">Choose One</Label>
                <Input type="select" name="artistType" id="artistType" defaultValue={path === 'edit-profile' ? user.artistType : ''}>
                  <option>Music Producer</option>
                  <option>Vocalist</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="displayName" id="display-name" placeholder="Display Name" defaultValue={path === 'update-profile' ? user.displayName : ''}/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="firstName" id="first-name" placeholder="First Name" defaultValue={path === 'update-profile' ? user.firstName : ''}/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="lastName" id="last-name" placeholder="Last Name" defaultValue={path === 'update-profile' ? user.lastName : ''}/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="city" id="city" placeholder="City" defaultValue={path === 'update-profile' ? user.city : ''}/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="country" id="country" placeholder="Country" defaultValue={path === 'update-profile' ? user.country : ''}/>
              </FormGroup>
              <FormGroup>
                <Input type="email" name="email" id="email" placeholder="Email Address" defaultValue={path === 'update-profile' ? user.email : ''}/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="facebook" id="facebook" placeholder="Facebook" defaultValue={path === 'update-profile' ? user.facebook : ''}/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="instagram" id="instagram" placeholder="Instagram" defaultValue={path === 'update-profile' ? user.instagram : ''}/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="twitter" id="twitter" placeholder="Twitter" defaultValue={path === 'update-profile' ? user.twitter : ''}/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="soundcloud" id="soundcloud" placeholder="Soundcloud" defaultValue={path === 'update-profile' ? user.soundcloud : ''}/>
              </FormGroup>
              <FormGroup>
                <Input type="url" name="imageUrl" id="image-url" onChange={handleChange} placeholder="Profile Image URL" defaultValue={path === 'update-profile' ? user.imageUrl : ''}/>
              </FormGroup>
              <FormGroup>
                <Label for="genre">Genre</Label>
                <Input type="select" name="genre" id="genre" defaultValue={path === 'update-profile' ? user.genre : ''}>
                  <option>Rock</option>
                  <option>Pop</option>
                  <option>Hip Hop</option>
                  <option>Dance</option>
                  <option>Folk</option>
                  <option>Country</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="Bio">Bio</Label>
                <Input type="textarea" name="bio" id="bio-section" defaultValue={path === 'update-profile' ? user.bio : ''}/>
              </FormGroup>
              <Button className="btn btn-outline-dark btn-sm" type="submit">{path === 'update-profile' ? 'Save Changes' : 'Save' }</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}
