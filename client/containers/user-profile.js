import React, { Component } from 'react'
import ProfileForm from '../components/profile-form'

export default class userProfile extends Component {
  render() {
    const { handleSubmit, handleUpdate, user, path } = this.props
    return (
      <div className="container bg-white">
        <ProfileForm handleSubmit={ handleSubmit } handleUpdate={ handleUpdate } user={ user } path={ path }/>
      </div>
    )
  }
}
