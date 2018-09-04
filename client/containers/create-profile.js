import React, { Component } from 'react';
import CreateProfileForm from '../components/create-profile-form'

export default class CreateProducerProfile extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {handleSubmit, handleChange, user} = this.props
    return (
      <div className="container bg-white">
        <CreateProfileForm handleChange={handleChange} handleSubmit={handleSubmit} user={user}/>
      </div>
    )
  }
}
