import React, { Component } from 'react'
import ProfileForm from '../components/profile-form'

export default class userProfile extends Component {
  render() {
    const { handleSubmit, handleChange, user, path } = this.props
    return (
      <div className="container bg-white">
        <ProfileForm handleChange={ handleChange } handleSubmit={ handleSubmit } user={ user } path={ path }/>
      </div>
    )
  }
}
