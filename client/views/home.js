import React, { Component } from 'react'
import WelcomeMessage from '../components/welcome-message'
import ProfileSelectors from '../components/profile-selectors'

export default class Home extends Component {

  render() {
    const { registeredUser } = this.props
    return (
      <div id="home-section">
        <div className="dark-overlay">
          <div id="welcome-banner">
            <WelcomeMessage/>
            {registeredUser === false &&
            <ProfileSelectors/>
            }
          </div>
        </div>
      </div>
    )
  }
}
