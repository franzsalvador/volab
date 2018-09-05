import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

export default class ProfileForm extends React.Component {
  render() {
    const { path } = this.props
    const { user } = this.props
    const { imageUrl } = this.props.user
    const { handleChange, handleSubmit } = this.props
    return (
      <div className="form-container mx-auto">
        <div className="row">
          <div className="col">
            {imageUrl ? (
              <img className="image-preview-box mx-auto mb-5 border" src={imageUrl}></img>
            ) : (
              <div className="image-preview-box-empty mx-auto mb-5 border">
                <i className="fas fa-camera upload-photo-icon"></i>
              </div>
            )}
          </div>
          <div className="col-6 mx-auto ">
            <Form onSubmit={handleSubmit} className="mb-5">
              <FormGroup>
                <Input type="text" name="displayName" id="display-name" onChange={ handleChange } placeholder="Display Name" defaultValue={ path === 'edit-profile' ? user.displayName : '' }/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="firstName" id="first-name" onChange={ handleChange } placeholder="First Name" defaultValue={ path === 'edit-profile' ? user.firstName : '' }/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="lastName" id="last-name" onChange={ handleChange } placeholder="Last Name" defaultValue={ path === 'edit-profile' ? user.lastName : '' }/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="city" id="city" onChange={ handleChange } placeholder="City" defaultValue={ path === 'edit-profile' ? user.city : '' }/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="country" id="country" onChange={ handleChange } placeholder="Country" defaultValue={ path === 'edit-profile' ? user.country : '' }/>
              </FormGroup>
              <FormGroup>
                <Input type="email" name="email" id="email" onChange={ handleChange } placeholder="Email Address" defaultValue={ path === 'edit-profile' ? user.email : '' }/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="facebook" id="facebook" onChange={ handleChange } placeholder="Facebook" defaultValue={ path === 'edit-profile' ? user.facebook : '' }/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="instagram" id="instagram" onChange={ handleChange } placeholder="Instagram" defaultValue={ path === 'edit-profile' ? user.instagram : '' }/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="twitter" id="twitter" onChange={ handleChange } placeholder="Twitter" defaultValue={ path === 'edit-profile' ? user.twitter : '' }/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="soundcloud" id="soundcloud" onChange={ handleChange } placeholder="Soundcloud" defaultValue={ path === 'edit-profile' ? user.soundcloud : '' }/>
              </FormGroup>
              <FormGroup>
                <Input type="url" name="imageUrl" id="image-url" onChange={ handleChange } placeholder="Profile Image URL" defaultValue={ path === 'edit-profile' ? user.imageUrl : '' }/>
              </FormGroup>
              <FormGroup>
                <Label for="genre">Genre</Label>
                <Input type="select" name="genre" id="genre" onChange={ handleChange } defaultValue={ path === 'edit-profile' ? user.genre : '' }>
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
                <Input type="textarea" name="bio" id="bio" onChange={ handleChange } defaultValue={ path === 'edit-profile' ? user.bio : '' }/>
              </FormGroup>
              <Button className="btn btn-outline-dark" type="submit" action="/create-profile">{ path === 'edit-profile' ? 'Save Changes' : 'Save' }</Button>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}
