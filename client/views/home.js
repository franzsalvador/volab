import React, { Component } from 'react'
import WelcomeMessage from '../components/welcome-message'
import ProfileSelectors from '../components/profile-selectors'

export default class Home extends Component {

  render() {
    const { navigate } = this.props
    return (
      <div className="container">
        <div id="home-section">
          <div className="dark-overlay">
            <div id="welcome-banner">
              <WelcomeMessage/>
              <ProfileSelectors navigate= { navigate }/>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
