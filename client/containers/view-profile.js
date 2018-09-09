import React, { Component } from 'react'
import { Jumbotron, Container } from 'reactstrap'
import MusicSection from '../components/music-section'

export default class ViewProfile extends Component {
  render() {
    const { user } = this.props
    const { displayName, firstName, lastName, city, country, imageUrl, bio, facebook, twitter, instagram, soundcloud } = this.props.user
    return (
      <div>
        <Container className="container bg-white px-0">
          <Jumbotron className="bg-white pt-4 mb-0">
            <div className="profile-image float-md-left rounded-circle" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <p className="profile-display-name mb-0 profile-details">{displayName}</p>
            <p className="profile-details mb-0">{firstName + ' ' + lastName}</p>
            <p className="profile-details details-location">{city + ', ' + country}</p>
            <div className="lead profile-details mb-0">
              <ul className="list-inline list-unstyled">
                <li className="list-inline-item">
                  <a target="_blank" rel="noopener noreferrer" href={facebook}>
                    <i className="fab fa-facebook-square contact-icons"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a target="_blank" rel="noopener noreferrer" href={instagram}>
                    <i className="fab fa-instagram contact-icons"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a target="_blank" rel="noopener noreferrer" href={twitter}>
                    <i className="fab fa-twitter contact-icons"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a target="_blank" rel="noopener noreferrer" href={soundcloud}>
                    <i className="fab fa-soundcloud contact-icons"></i>
                  </a>
                </li>
              </ul>
            </div>
            <hr className="my-4"/>
            <p className="profile-details">{bio}</p>
          </Jumbotron>
          <MusicSection user = { user }/>
        </Container>
      </div>
    )
  }
}
