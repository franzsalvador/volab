import React from 'react'
import { Container, Badge } from 'reactstrap'
import * as queryString from '../util/query-string'

export default function ProfileSideBar({ artist }) {
  const { displayName, bio, facebook, twitter, instagram, soundcloud, followers, following } = artist
  return (
    <Container className="clear-border profile-side-bar border-left px-4 col-md-3">
      <a className="btn btn-sm float-left col-md-6 profile-stats pl-0" href={'#view-followers' + queryString.stringify({'displayName': displayName})}>Followers <Badge color="primary"> {followers ? followers.length : 0} </Badge></a>
      <a className="btn btn-sm col-md-6 profile-stats pl-0" href={'#view-following' + queryString.stringify({'displayName': displayName})}>Following <Badge color="primary"> {following ? following.length : 0} </Badge></a>
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
