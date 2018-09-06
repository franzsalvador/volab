import React, { Component } from 'react'

export default class ViewProfile extends Component {
  render() {
    const { displayName, firstName, lastName, city, country, imageUrl, bio, facebook, twitter, instagram, soundcloud } = this.props.user
    return (
      <div>
        <div className="jumbotron container">
          <div className="profile-image float-md-left" style={{ backgroundImage: `url(${imageUrl})` }}></div>
          <h3 className="display-4">{displayName}</h3>
          <p className="lead">{firstName + ' ' + lastName}</p>
          <p className="lead">{city + ', ' + country}</p>
          <div className="lead">
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
          <p>{bio}</p>
        </div>
      </div>
    )
  }
}
