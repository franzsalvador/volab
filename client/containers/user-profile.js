import React, { Component } from 'react'
import ProfileForm from '../components/profile-form'

export default class UserProfile extends Component {
  render() {
    const { createProfile, editProfile, deleteProfile, navigate, user, path } = this.props
    return (
      <div className="container bg-white">
        <ProfileForm
          createProfile = { createProfile }
          editProfile = { editProfile }
          deleteProfile = { deleteProfile }
          navigate = { navigate }
          user={ user }
          path={ path }/>
      </div>
    )
  }
}
