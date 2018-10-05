import React, { Component } from 'react'
import * as request from '../util/fetch'
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
    request.sendFetch(url, req, updateUser)
  }
  updateProfile(userDetails) {
    const { updateUser, user: { displayName } } = this.props
    const url = '/artists/' + displayName
    const req = {
      method: 'PUT',
      body: JSON.stringify(userDetails),
      headers: { 'Content-Type': 'application/json' }
    }
    request.sendFetch(url, req, updateUser)
  }
  render() {
    const { navigate, user, registeredUser, path } = this.props
    const { createProfile, updateProfile } = this
    return (
      <div>
        <ProfileForm
          createProfile = {createProfile}
          updateProfile = {updateProfile}
          registeredUser= {registeredUser}
          navigate = {navigate}
          user={user}
          path={path}/>
      </div>
    )
  }
}
