import React, { Component } from 'react'
import ProfileForm from '../components/profile-form'

export default class userProfile extends Component {
  render() {
    const { createProfile, editProfile, navigate, user, path } = this.props
    return (
      <div className="container bg-white">
        <ProfileForm
          createProfile = { createProfile }
          editProfile = { editProfile }
          navigate = { navigate }
          user={ user }
          path={ path }/>
      </div>
    )
  }
}
