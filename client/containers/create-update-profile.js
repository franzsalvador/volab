import React, { Component } from 'react'
import ProfileForm from '../components/profile-form'

export default class CreateUpdateProfile extends Component {
  render() {
    const { createProfile, updateProfile, navigate, user, registeredUser, path } = this.props
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
