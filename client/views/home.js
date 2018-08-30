import React from 'react';
import NavBar from '../components/nav-bar'
import WelcomeMessage from '../components/welcome-message'
import ProfileSelectors from '../components/profile-selectors'

export default function Home(props) {
  return (
    <div>
      <NavBar/>
      <WelcomeMessage/>
      <ProfileSelectors handleClickProd={ props.handleClickProd }/>
    </div>
  )
}
