import React, { Component } from 'react'
import ProfileForm from '../components/profile-form'

export default class CreateUpdateProfile extends Component {
  constructor(props) {
    super(props)
    this.createProfile = this.createProfile.bind(this)
    this.updateProfile = this.updateProfile.bind(this)
  }
  createProfile(userDetails) {
    const { updateUser } = this.props
    const url = '/artists'
    const req = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: { 'Content-Type': 'application/json' }
    }
    fetch(url, req)
      .then(res => res.ok ? res.json() : null)
      .then(user => user && updateUser(user))
      .catch(err => console.error(err))
  }
  updateProfile(userDetails) {
    const { updateUser } = this.props
    const { displayName } = this.props.user
    const url = '/artists/' + displayName
    const req = {
      method: 'PUT',
      body: JSON.stringify(userDetails),
      headers: { 'Content-Type': 'application/json' }
    }
    fetch(url, req)
      .then(res => res.ok ? res.json() : null)
      .then(user => user && updateUser(user))
      .catch(err => console.error(err))
  }
  render() {
    const { navigate, user, registeredUser, path } = this.props
    const { createProfile, updateProfile } = this
    return (
      <div>
        <ProfileForm
          createProfile = { createProfile }
          updateProfile = { updateProfile }
          registeredUser= { registeredUser }
          navigate = { navigate }
          user={ user }
          path={ path }/>
      </div>
    )
  }
}
