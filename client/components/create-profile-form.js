import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

export default class CreateProfileForm extends React.Component {
  constructor(props) {
    super(props)
  }
  render()  {
    const {imageUrl} = this.props.user
    const imageSource = imageUrl ? imageUrl : ''
    const { handleChange, handleSubmit } = this.props
    return (
      <div className="form-container mx-auto">
        <div className="row">
          <div className="col">
            {imageUrl ? (
              <img className="image-preview-box mx-auto mb-5 border" src={imageSource}></img>
            ) : (
              <div className="image-preview-box-empty mx-auto mb-5 border">
                <i className="fas fa-camera upload-photo-icon"></i>
              </div>
            )}
          </div>
          <div className="col-6 mx-auto ">
            <Form onSubmit={handleSubmit} className="mb-5">
              <FormGroup>
                <Input type="text" name="displayName" id="display-name" onChange={handleChange} placeholder="Display Name"/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="firstName" id="first-name" onChange={handleChange} placeholder="First Name"/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="lastName" id="last-name" onChange={handleChange} placeholder="Last Name"/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="city" id="city" onChange={handleChange} placeholder="City"/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="country" id="country" onChange={handleChange} placeholder="Country"/>
              </FormGroup>
              <FormGroup>
                <Input type="email" name="email" id="email" onChange={handleChange} placeholder="Email Address"/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="facebook" id="facebook" onChange={handleChange} placeholder="Facebook"/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="instagram" id="instagram" onChange={handleChange} placeholder="Instagram"/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="twitter" id="twitter" onChange={handleChange} placeholder="Twitter"/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="soundcloud" id="soundcloud" onChange={handleChange} placeholder="Soundcloud"/>
              </FormGroup>
              <FormGroup>
                <Input type="url" name="imageUrl" id="image-url" onChange={handleChange} placeholder="Profile Image URL"/>
              </FormGroup>
              <FormGroup>
                <Label for="genre">Genre</Label>
                <Input type="select" name="genre" id="genre" onChange={handleChange}>
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
                <Input type="textarea" name="bio" id="bio" onChange={handleChange}/>
              </FormGroup>
              <Button className="btn btn-outline-dark" type="submit" action="/create-profile">Save</Button>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}
