import React, { Component } from 'react'
import * as request from '../util/fetch'
import ProfileForm from '../components/profile-form'

export default class CreateUpdateProfile extends Component {
  constructor(props) {
    super(props)
    this.saveProfile = this.saveProfile.bind(this)
  }
  saveProfile(userDetails) {
    const { updateUser, navigate, path, user: { displayName } } = this.props
    const url = path === 'update-profile'
      ? '/artists/' + displayName
      : '/artists'
    const method = path === 'update-profile'
      ? 'PUT'
      : 'POST'
    const navigatePath = path === 'update-profile'
      ? '#' + displayName
      : 'add-music'
    const alertMessage = path === 'update-profile'
      ? 'Your profile has been updated.'
      : 'Your profile has been saved.'
    const req = {
      method: method,
      body: JSON.stringify(userDetails),
      headers: { 'Content-Type': 'application/json' }
    }
    request.sendFetch(url, req)
      .then(user => updateUser(user))
      .then(alert(alertMessage))
      .then(navigate({ path: navigatePath }))
  }
  render() {
    const { navigate, user, registeredUser, path } = this.props
    const { saveProfile } = this
    return (
      <div>
        <ProfileForm
          saveProfile = {saveProfile}
          registeredUser= {registeredUser}
          navigate = {navigate}
          user={user}
          path={path}/>
      </div>
    )
  }
}
