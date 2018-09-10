import React, { Component } from 'react'
import ProfileForm from '../components/profile-form'

export default class CreateEditProfile extends Component {
  render() {
    const { createProfile, editProfile, navigate, user, registeredUser, path } = this.props
    return (
      <div>
        <ProfileForm
          createProfile = { createProfile }
          editProfile = { editProfile }
          registeredUser= { registeredUser }
          navigate = { navigate }
          user={ user }
          path={ path }/>
      </div>
    )
  }
}
