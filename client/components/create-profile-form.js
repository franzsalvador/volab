import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

export default class CreateProfileForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value })
  }
  handleSubmit() {
    event.preventDefault()
    const cardForm = event.target
    const formData = new FormData(cardForm)
    const userProfile = {}
    for (var pair of formData.entries()) {
      userProfile[pair[0]] = pair[1]
    }
    this.setState({userProfile})
    alert('Your profile has been saved.')
    this.props.onSubmit(this.state)
  }
  render()  {
    const {imageUrl} = this.state
    const imageSource = imageUrl ? imageUrl : ''
    const imageStyle = { backgroundImage: `url(${imageUrl})`}
    const { handleChange, handleSubmit } = this
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
