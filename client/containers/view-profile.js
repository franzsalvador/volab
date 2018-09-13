import React, { Component } from 'react'
import { Jumbotron, Container } from 'reactstrap'
import MusicSection from '../components/music-section'

export default class ViewProfile extends Component {
  constructor(props) {
    super(props)
    this.state = { artist: {} }
  }
  componentDidMount() {
    const { displayName } = this.props.params
    fetch('/artists/displayName/' + displayName)
      .then(res => res.ok ? res.json() : null)
      .then(artist => artist && this.setState({ artist }))
      .catch(err => console.error(err))
  }
  render() {
    const { artist } = this.state
    const { displayName, firstName, lastName, city, country, imageUrl, bio, facebook, twitter, instagram, soundcloud, artistType } = this.state.artist
    return (
      <div>
        <Container className="container bg-white px-0">
          <Jumbotron className="bg-white pt-4 mb-0">
            <div className="profile-image float-md-left rounded-circle" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <p className="profile-display-name mb-0 profile-details">{displayName + ' (' + artistType + ')'}</p>
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
          <MusicSection artist = { artist }/>
        </Container>
      </div>
    )
  }
}
