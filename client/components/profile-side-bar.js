import React from 'react'
import { Container, Badge } from 'reactstrap'

export default function ProfileSideBar(props) {
  const { artist } = props
  const { bio, facebook, twitter, instagram, soundcloud } = props.artist
  let followers = 0
  for (const key in artist) {
    if (key === 'followedBy') {
      followers++
    }
  }
  let following = 0
  for (const key in artist) {
    if (key === 'following') {
      following++
    }
  }
  return (
    <Container className="clear-border profile-side-bar border-left px-4 col-md-3">
      <div className="float-left col-md-6 profile-stats pl-0">Followers <Badge color="primary"> { followers } </Badge></div>
      <div className="col-md-6 profile-stats pl-0">Following <Badge color="primary"> { following } </Badge></div>
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
