import React, { Component } from 'react'
import { Button } from 'reactstrap'

export default class InfoBar extends Component {
  constructor(props) {
    super(props)
    this.state = { isFollowing: false }
    this.handleFollow = this.handleFollow.bind(this)
    this.handleUnFollow = this.handleUnFollow.bind(this)
  }
  componentDidMount() {
    const userFollowing = this.props.user.following
    const { displayName } = this.props
    const artist = displayName.replace('%20', ' ')
    userFollowing.includes(artist) ? this.setState({ isFollowing: true }) : this.setState({ isFollowing: false })
  }
  handleFollow() {
    const user = this.props.user.displayName
    const artistFollowed = this.props.artist.displayName
    const { updateUser, updateArtist } = this.props
    const urlFollow = 'artists/follow/' + user
    const urlFollowedBy = 'artists/follow/' + artistFollowed

    const reqFollow = {
      method: 'PUT',
      body: JSON.stringify({ following: artistFollowed }),
      headers: { 'Content-Type': 'application/json' }
    }
    fetch(urlFollow, reqFollow)
      .then(res => res.ok ? res.json() : null)
      .then(user => user && updateUser(user))
      .catch(err => console.error(err))

    const reqFollowedBy = {
      method: 'PUT',
      body: JSON.stringify({ followers: user }),
      headers: { 'Content-Type': 'application/json' }
    }
    fetch(urlFollowedBy, reqFollowedBy)
      .then(res => res.ok ? res.json() : null)
      .then(artist => updateArtist(artist))
      .catch(err => console.error(err))

    this.setState({ isFollowing: true })

  }
  handleUnFollow() {
    const user = this.props.user.displayName
    const artistUnFollowed = this.props.artist.displayName
    const { updateUser, updateArtist } = this.props
    const urlUnFollow = 'artists/unfollow/' + user
    const urlUnFollowedBy = 'artists/unfollow/' + artistUnFollowed

    const reqUnFollow = {
      method: 'PUT',
      body: JSON.stringify({ following: { $in: [ artistUnFollowed ] } }),
      headers: { 'Content-Type': 'application/json' }
    }
    fetch(urlUnFollow, reqUnFollow)
      .then(res => res.ok ? res.json() : null)
      .then(user => user && updateUser(user))
      .catch(err => console.error(err))

    const reqUnFollowedBy = {
      method: 'PUT',
      body: JSON.stringify({ followers: { $in: [ user ] } }),
      headers: { 'Content-Type': 'application/json' }
    }
    fetch(urlUnFollowedBy, reqUnFollowedBy)
      .then(res => res.ok ? res.json() : null)
      .then(artist => updateArtist(artist))
      .catch(err => console.error(err))

    this.setState({ isFollowing: false })
  }
  render() {
    const { handleFollow, handleUnFollow } = this
    const { user } = this.props
    const { isFollowing } = this.state
    const currentArtistPage = this.props.artist.displayName
    return (
      <div>
        <div className="info-bar pt-2">
          <div className="px-4 font-weight-bold float-left">Tracks</div>
          <div className="px-4 float-right">
            {user.displayName !== currentArtistPage &&
            <Button className="btn btn-outline-dark btn-sm mb-3" type="button" onClick={isFollowing ? handleUnFollow : handleFollow}>{isFollowing ? 'Following' : 'Follow'}</Button>
            }
          </div>
        </div>
        <hr className="mx-4"/>
      </div>
    )
  }
}
