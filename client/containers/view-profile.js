import React, { Component } from 'react'
import { Container, Button } from 'reactstrap'
import MusicSection from '../components/music-section'

export default class ViewProfile extends Component {
  constructor(props) {
    super(props)
    this.state = { artist: {} }
    this.handleFollow = this.handleFollow.bind(this)
    this.handleFollowedBy = this.handleFollowedBy.bind(this)
  }
  componentDidMount() {
    const { displayName } = this.props.params
    fetch('/artists/displayName/' + displayName)
      .then(res => res.ok ? res.json() : null)
      .then(artist => artist && this.setState({ artist }))
      .catch(err => console.error(err))
  }
  handleFollow() {
    const user = this.props.user.displayName
    const artistFollowed = this.state.artist.displayName
    const { handleFollowedBy } = this
    const url = 'artists/' + user

    const req = {
      method: 'PUT',
      body: JSON.stringify({ following: artistFollowed }),
      headers: { 'Content-Type': 'application/json' }
    }

    fetch(url, req)
      .then(res => res.ok ? res.json() : null)
      .then(user => user && console.log(user))
      .catch(err => console.error(err))

    handleFollowedBy()
  }
  handleFollowedBy() {
    const user = this.props.user.displayName
    const artistFollowed = this.state.artist.displayName
    const url = 'artists/' + artistFollowed
    const req = {
      method: 'PUT',
      body: JSON.stringify({ followedBy: user }),
      headers: { 'Content-Type': 'application/json' }
    }
    fetch(url, req)
      .then(res => res.ok ? res.json() : null)
      .then(user => user && console.log(user))
      .catch(err => console.error(err))
  }
  render() {
    const { artist } = this.state
    const { displayName, firstName, lastName, city, country, imageUrl, bio, facebook, twitter, instagram, soundcloud, artistType } = this.state.artist
    const { handleFollow } = this
    const { user } = this.props
    return (
      <div>
        <Container className="container clear-border bg-white px-0">
          <div className="profile-header p-4">
            <div className="profile-image rounded-circle float-md-left" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <p className="profile-display-name mb-0 profile-details">{displayName + ' (' + artistType + ')'}</p>
            <p className="profile-details mb-0">{firstName + ' ' + lastName}</p>
            <p className="profile-details details-location">{city + ', ' + country}</p>
          </div>
          <div className="info-bar pt-2">
            <div className="px-4 font-weight-bold float-left">Tracks</div>
            <div className="px-4 float-right">
              {user.displayName !== artist.displayName &&
              <Button className="btn btn-outline-dark btn-sm mb-3" type="button" onClick={ handleFollow }>Follow</Button>
              }
            </div>
          </div>
          <hr className="mx-4"/>
          <Container className="clear-border border-right px-4 col-md-9 float-md-left">
            <MusicSection artist = { artist }/>
          </Container>
          <Container className="clear-border profile-side-bar px-4 col-md-3">
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
