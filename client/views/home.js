import React, { Component } from 'react'
import { Container } from 'reactstrap'
import WelcomeMessage from '../components/welcome-message'
import ProfileSelectors from '../components/profile-selectors'

export default class Home extends Component {

  render() {
    const { navigate } = this.props
    return (
      <Container className="px-0">
        <div id="home-section">
          <div className="dark-overlay">
            <div id="welcome-banner">
              <WelcomeMessage/>
              <ProfileSelectors navigate= { navigate }/>
            </div>
          </div>
        </div>
      </Container>

    )
  }
}
