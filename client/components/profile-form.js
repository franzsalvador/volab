import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

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
    console.log(this.state)
  }
  handleSubmit(event) {
    event.preventDefault()
    const { displayName } = this.props.user
    const { createProfile, navigate } = this.props
    const createProfileForm = event.target
    const formData = new FormData(createProfileForm)
    const user = {}
    for (var pair of formData.entries()) {
      user[pair[0]] = pair[1]
    }
    createProfile(user)
    alert('Your profile has been saved.')
    navigate({ path: 'view-profile', params: { displayName } })
  }
  handleUpdate(event) {
    event.preventDefault()
    const { id } = this.props.user
    const { editProfile, navigate } = this.props
    const createProfileForm = event.target
    const formData = new FormData(createProfileForm)
    const user = {}
    for (var pair of formData.entries()) {
      user[pair[0]] = pair[1]
    }
    editProfile(user)
    alert('Your profile has been updated.')
    navigate({ path: 'view-profile', params: { id } })
  }
  render() {
    const { handleChange, handleSubmit, handleUpdate } = this
    const { path } = this.props
    const { user } = this.props
    const { imageUrl } = this.state
    return (
      <div className="form-container mx-auto">
        <div className="row">
          <div className="col">
            {imageUrl ? (
              <div className="profile-image float-md-left" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            ) : (
              <div className="image-preview-box-empty mx-auto mb-5 border float-md-left">
                <i className="fas fa-camera upload-photo-icon"></i>
              </div>
            )}
          </div>
          <div className="col-6 mx-auto ">
            <Form onSubmit={ path === 'edit-profile' ? handleUpdate : handleSubmit } className="mb-5">
              <FormGroup>
                <Input type="text" name="displayName" id="display-name" placeholder="Display Name" defaultValue={ path === 'edit-profile' ? user.displayName : '' }/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="firstName" id="first-name" placeholder="First Name" defaultValue={ path === 'edit-profile' ? user.firstName : '' }/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="lastName" id="last-name" placeholder="Last Name" defaultValue={ path === 'edit-profile' ? user.lastName : '' }/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="city" id="city" placeholder="City" defaultValue={ path === 'edit-profile' ? user.city : '' }/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="country" id="country" placeholder="Country" defaultValue={ path === 'edit-profile' ? user.country : '' }/>
              </FormGroup>
              <FormGroup>
                <Input type="email" name="email" id="email" placeholder="Email Address" defaultValue={ path === 'edit-profile' ? user.email : '' }/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="facebook" id="facebook" placeholder="Facebook" defaultValue={ path === 'edit-profile' ? user.facebook : '' }/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="instagram" id="instagram" placeholder="Instagram" defaultValue={ path === 'edit-profile' ? user.instagram : '' }/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="twitter" id="twitter" placeholder="Twitter" defaultValue={ path === 'edit-profile' ? user.twitter : '' }/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="soundcloud" id="soundcloud" placeholder="Soundcloud" defaultValue={ path === 'edit-profile' ? user.soundcloud : '' }/>
              </FormGroup>
              <FormGroup>
                <Input type="url" name="imageUrl" id="image-url" onChange={ handleChange } placeholder="Profile Image URL" defaultValue={ path === 'edit-profile' ? user.imageUrl : '' }/>
              </FormGroup>
              <FormGroup>
                <Label for="genre">Genre</Label>
                <Input type="select" name="genre" id="genre" defaultValue={ path === 'edit-profile' ? user.genre : '' }>
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
                <Input type="textarea" name="bio" id="bio" defaultValue={ path === 'edit-profile' ? user.bio : '' }/>
              </FormGroup>
              <Button className="btn btn-outline-dark btn-sm" type="submit">{ path === 'edit-profile' ? 'Save Changes' : 'Save' }</Button>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}
