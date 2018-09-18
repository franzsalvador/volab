import React, { Component } from 'react'
import { Container, Badge } from 'reactstrap'

export default class ProfileSideBar extends Component {
  constructor(props) {
    super(props)
    this.handleFollowers = this.handleFollowers.bind(this)
    this.handleFollowing = this.handleFollowing.bind(this)
  }
  handleFollowers() {
    const { navigate } = this.props
    const { displayName } = this.props.artist
    navigate({ path: 'view-followers', params: { 'displayName': displayName } })
  }
  handleFollowing() {
    const { navigate } = this.props
    const { displayName } = this.props.artist
    navigate({ path: 'view-following', params: { 'displayName': displayName } })
  }
  render() {
    const { handleFollowers, handleFollowing } = this
    const { artist } = this.props
    const { bio, facebook, twitter, instagram, soundcloud } = this.props.artist
    const { followers } = artist
    const { following } = artist
    return (
      <Container className="clear-border profile-side-bar border-left px-4 col-md-3">
        <div className="float-left col-md-6 profile-stats pl-0" onClick={handleFollowers}>Followers <Badge color="primary"> {followers ? followers.length : 0} </Badge></div>
        <div className="col-md-6 profile-stats pl-0" onClick={handleFollowing}>Following <Badge color="primary"> {following ? following.length : 0} </Badge></div>
        <hr/>
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
    )
  }
}
