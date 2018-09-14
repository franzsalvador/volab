import React, { Component } from 'react'
import { Container } from 'reactstrap'
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
        <Container className="container clear-border bg-white px-0">
          <div className="profile-header p-4">
            <div className="profile-image rounded-circle float-md-left" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <p className="profile-display-name mb-0 profile-details">{displayName + ' (' + artistType + ')'}</p>
            <p className="profile-details mb-0">{firstName + ' ' + lastName}</p>
            <p className="profile-details details-location">{city + ', ' + country}</p>
          </div>
          <hr className="mx-5"/>
          <Container className="clear-border border-right px-4 col-md-9 float-md-left">
            <MusicSection artist = { artist }/>
          </Container>
          <Container className="clear-border profile-side-bar px-4 col-md-3 float-md-right">
            <Container className="profile-stats col-lg-6 col-sm-12 float-left border-left">Followers</Container>
            <Container className="profile-stats col-lg-6 col-sm-12 border-left">Following</Container>
            <p>{bio}</p>
            <ul className="list-unstyled">
              <li>
                <a target="_blank" rel="noopener noreferrer" href={facebook}>
                  <i className="fab fa-facebook-square contact-icons"></i>
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href={instagram}>
                  <i className="fab fa-instagram contact-icons"></i>
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href={twitter}>
                  <i className="fab fa-twitter contact-icons"></i>
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href={soundcloud}>
                  <i className="fab fa-soundcloud contact-icons"></i>
                </a>
              </li>
            </ul>
          </Container>
        </Container>
      </div>
    )
  }
}
