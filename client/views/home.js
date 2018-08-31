import React from 'react';
import WelcomeMessage from '../components/welcome-message'
import ProfileSelectors from '../components/profile-selectors'

export default function Home(props) {
  return (
      <div id="welcome-banner">
        <WelcomeMessage/>
        <ProfileSelectors handleClickProd={ props.handleClickProd }/>
      </div>
  )
}
