import React, { Component } from 'react'
import { Jumbotron, Container } from 'reactstrap'

export default class ViewProfile extends Component {
  render() {
    const { displayName, firstName, lastName, city, country, imageUrl, bio, facebook, twitter, instagram, soundcloud } = this.props.user
    return (
      <div>
        <Container className="container bg-white px-0">
          <Jumbotron className="bg-white mb-0">
            <div className="profile-image float-md-left rounded-circle" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <p className="profile-display-name mb-0 profile-details">{displayName}</p>
            <p className="lead profile-details">{firstName + ' ' + lastName}</p>
            <p className="lead profile-details">{city + ', ' + country}</p>
            <div className="lead profile-details">
              <ul className="detail-list-items">
                <li>
                  <a target="_blank" rel="noopener noreferrer" href={facebook}>
                    <i className="fab fa-facebook-square contact-icons"></i>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href={instagram}>
                    <i className="fab fa-instagram contact-icons"></i>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href={twitter}>
                    <i className="fab fa-twitter contact-icons"></i>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href={soundcloud}>
                    <i className="fab fa-soundcloud contact-icons"></i>
                  </a>
                </li>
              </ul>
            </div>
            <hr className="my-4"/>
            <p className="profile-details">{bio}</p>
          </Jumbotron>
        </Container>
      </div>
    )
  }
}
