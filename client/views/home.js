import React from 'react';
import NavBar from '../components/nav-bar'
import WelcomeMessage from '../components/welcome-message'
import ProfileSelectors from '../components/profile-selectors'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <WelcomeMessage/>
        <ProfileSelectors/>
      </div>
    )
  }
}
