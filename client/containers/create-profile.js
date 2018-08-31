import React, { Component } from 'react';
import CreateProfileForm from '../components/create-profile-form'

export default class CreateProducerProfile extends Component {
  constructor(props) {
    super(props)
    this.register = this.register.bind(this)
  }
  register(userProfile) {
    console.log(userProfile)
    const req = {
      method: 'POST',
      body: JSON.stringify(userProfile),
      headers: { 'Content-Type': 'application/json' }
    }
    fetch('/create-profile', req)
      .then(res => res.ok)
      .catch(err => console.error(err))
  }
  render() {
    const {register} = this
    return (
      <div>
        <CreateProfileForm onSubmit={register}/>
      </div>
    )
  }
}
