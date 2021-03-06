import React from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Container,
  Col
} from 'reactstrap'

export default class ProfileForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value })
  }
  handleSubmit(event) {
    event.preventDefault()
    const { saveProfile, path } = this.props
    const profileForm = event.target
    const formData = new FormData(profileForm)
    const user = {}
    for (const pair of formData.entries()) {
      user[pair[0]] = pair[1]
    }
    if (path === 'update-profile') {
      saveProfile(user)
    }
    else {
      user.followers = []
      user.following = []
      saveProfile(user)
    }
  }
  render() {
    const { handleChange, handleSubmit } = this
    const { path, user, registeredUser } = this.props
    const { imageUrl } = this.state
    const profileFormHeader = registeredUser !== true
      ? 'Create Profile'
      : 'Edit Profile'
    return (
      <Container>
        <h5 className="save-edit-header pt-5 pb-4 font-weight-bold">
          {profileFormHeader}
        </h5>
        <div>
          {imageUrl ? (
            <div className="profile-image rounded-circle mx-auto"
              style={{backgroundImage: `url(${imageUrl})`}}></div>
          ) : (
            <div className="image-preview-box-empty mx-auto rounded-circle border">
              <i className="fas fa-camera upload-photo-icon"></i>
            </div>
          )}
        </div>
        <Form
          onSubmit={handleSubmit}
          className="mb-5">
          <Row className="px-5 pt-5">
            <Col className="col-lg-6">
              <FormGroup>
                <Label for="genre">Choose One</Label>
                <Input
                  className="form-control form-control-sm"
                  type="select" name="artistType"
                  id="artistType"
                  placeholder="Choose one"
                  defaultValue={path === 'edit-profile' ? user.artistType : ''}>
                  <option>Music Producer</option>
                  <option>Vocalist</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Input
                  className="form-control form-control-sm"
                  type="text" name="firstName"
                  id="first-name"
                  placeholder="First Name"
                  defaultValue={path === 'update-profile' ? user.firstName : ''}/>
              </FormGroup>
              <FormGroup>
                <Input
                  className="form-control form-control-sm"
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City"
                  defaultValue={path === 'update-profile' ? user.city : ''}/>
              </FormGroup>
              <FormGroup>
                <Input
                  className="form-control form-control-sm"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  defaultValue={path === 'update-profile' ? user.email : ''}/>
              </FormGroup>
              <FormGroup>
                <Input
                  className="form-control form-control-sm"
                  type="text"
                  name="facebook"
                  id="facebook"
                  placeholder="Facebook"
                  defaultValue={path === 'update-profile' ? user.facebook : ''}/>
              </FormGroup>
              <FormGroup>
                <Input
                  className="form-control form-control-sm"
                  type="text"
                  name="instagram"
                  id="instagram"
                  placeholder="Instagram"
                  defaultValue={path === 'update-profile' ? user.instagram : ''}/>
              </FormGroup>
              <FormGroup>
                <Label for="genre">Bio</Label>
                <Input
                  className="form-control form-control-sm"
                  type="textarea"
                  name="bio"
                  id="bio-section"
                  defaultValue={path === 'update-profile' ? user.bio : ''}/>
              </FormGroup>
            </Col>
            <Col className="col-lg-6">
              <FormGroup>
                <Label for="genre">Genre</Label>
                <Input
                  className="form-control form-control-sm"
                  type="select"
                  name="genre"
                  id="genre"
                  defaultValue={path === 'update-profile' ? user.genre : ''}>
                  <option>Rock</option>
                  <option>Indie</option>
                  <option>Pop</option>
                  <option>Hip Hop</option>
                  <option>R&B</option>
                  <option>Dance</option>
                  <option>Folk</option>
                  <option>Country</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Input
                  className="form-control form-control-sm"
                  type="text"
                  name="displayName"
                  id="display-name"
                  placeholder="Display Name"
                  required
                  defaultValue={path === 'update-profile' ? user.displayName : ''}/>
              </FormGroup>
              <FormGroup>
                <Input
                  className="form-control form-control-sm"
                  type="text"
                  name="lastName"
                  id="last-name"
                  placeholder="Last Name"
                  defaultValue={path === 'update-profile' ? user.lastName : ''}/>
              </FormGroup>
              <FormGroup>
                <Input
                  className="form-control form-control-sm"
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Country"
                  defaultValue={path === 'update-profile' ? user.country : ''}/>
              </FormGroup>
              <FormGroup>
                <Input
                  className="form-control form-control-sm"
                  type="text"
                  name="twitter"
                  id="twitter"
                  placeholder="Twitter"
                  defaultValue={path === 'update-profile' ? user.twitter : ''}/>
              </FormGroup>
              <FormGroup>
                <Input
                  className="form-control form-control-sm"
                  type="text"
                  name="soundcloud"
                  id="soundcloud"
                  placeholder="Soundcloud"
                  defaultValue={path === 'update-profile' ? user.soundcloud : ''}/>
              </FormGroup>
              <FormGroup>
                <Input
                  className="form-control form-control-sm"
                  type="url"
                  name="imageUrl"
                  id="image-url"
                  onChange={handleChange}
                  placeholder="Profile Image URL"
                  defaultValue={path === 'update-profile' ? user.imageUrl : ''}/>
              </FormGroup>
              <FormGroup>
                <Input
                  className="form-control form-control-sm"
                  type="url"
                  name="backgroundImageUrl"
                  id="backgroundImageUrl"
                  placeholder="Background Image URL"
                  defaultValue={path === 'update-profile' ? user.backgroundImageUrl : ''}/>
              </FormGroup>
            </Col>
          </Row>
          <div className="save-profile-button mx-auto pt-3 pb-5">
            <Button
              className="btn btn-outline-dark btn-sm"
              type="submit">{path === 'update-profile' ? 'Save Changes' : 'Save'}
            </Button>
          </div>
        </Form>
      </Container>
    )
  }
}
