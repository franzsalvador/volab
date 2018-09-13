import React, { Component } from 'react'
import WelcomeMessage from '../components/welcome-message'
import ProfileSelectors from '../components/profile-selectors'

export default class Home extends Component {

  render() {
    const { navigate, registeredUser } = this.props
    return (
      <div id="home-section">
        <div className="dark-overlay">
          <div id="welcome-banner">
            <WelcomeMessage/>
            {registeredUser === false &&
            <ProfileSelectors navigate= { navigate }/>
            }
          </div>
        </div>
      </div>
    )
  }
}
