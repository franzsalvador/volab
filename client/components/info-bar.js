import React, { Component } from 'react'
import { Button } from 'reactstrap'

export default class ProfileHeader extends Component {
  constructor(props) {
    super(props)
    this.handleFollow = this.handleFollow.bind(this)
    this.handleFollowedBy = this.handleFollowedBy.bind(this)
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

    location.reload()
  }
  render() {
    const { handleFollow } = this
    const { artist, user } = this.props
    return (
      <div>
        <div className="info-bar pt-2">
          <div className="px-4 font-weight-bold float-left">Tracks</div>
          <div className="px-4 float-right">
            {user.displayName !== artist.displayName &&
            <Button className="btn btn-outline-dark btn-sm mb-3" type="button" onClick={ handleFollow }>Follow</Button>
            }
          </div>
        </div>
        <hr className="mx-4"/>
      </div>
    )
  }
}
