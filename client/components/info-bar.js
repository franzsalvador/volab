import React, { Component } from 'react'
import { Button } from 'reactstrap'

export default class InfoBar extends Component {
  constructor(props) {
    super(props)
    this.state = { isFollowing: false }
    this.handleFollow = this.handleFollow.bind(this)
    this.handleFollowedBy = this.handleFollowedBy.bind(this)
  }
  componentDidMount() {
    const { displayName } = this.props
    const currentArtistView = displayName.replace('%20', ' ')
    const artistsFollowing = []
    const { user } = this.props
    for (const key in user) {
      if (key.startsWith('following')) {
        artistsFollowing.push(user[key])
      }
    }
    artistsFollowing.forEach(artistFollowed => {
      if (artistFollowed === currentArtistView) {
        this.setState({ isFollowing: true })
      }
    })
    console.log(artistsFollowing)
    console.log(currentArtistView)
  }
  handleFollow() {
    const user = this.props.user.displayName
    const artistFollowed = this.props.artist.displayName
    const { updateUser } = this.props
    const { handleFollowedBy } = this
    const url = 'artists/' + user

    const req = {
      method: 'PUT',
      body: JSON.stringify({ following: artistFollowed }),
      headers: { 'Content-Type': 'application/json' }
    }

    fetch(url, req)
      .then(res => res.ok ? res.json() : null)
      .then(user => user && updateUser(user))
      .catch(err => console.error(err))

    handleFollowedBy()
  }
  handleFollowedBy() {
    const user = this.props.user.displayName
    const artistFollowed = this.props.artist.displayName
    const { updateArtist } = this.props
    const url = 'artists/' + artistFollowed
    const req = {
      method: 'PUT',
      body: JSON.stringify({ followedBy: user }),
      headers: { 'Content-Type': 'application/json' }
    }
    fetch(url, req)
      .then(res => res.ok ? res.json() : null)
      .then(artist => updateArtist(artist))
      .catch(err => console.error(err))
  }
  update() {
    const currentArtistPage = this.props.artist.displayName
    const artistsFollowing = []
    const { user } = this.props
    for (const key in user) {
      if (key.startsWith('following')) {
        artistsFollowing.push(user[key])
      }
    }
    artistsFollowing.forEach(artistFollowed => {
      if (artistFollowed === currentArtistPage) {
        this.setState({ isFollowing: true })
      }
    })
    console.log(artistsFollowing)
    console.log(this.props.user)
  }
  render() {
    console.log(this.state)
    const { handleFollow } = this
    const { user } = this.props
    const { isFollowing } = this.state
    const currentArtistPage = this.props.artist.displayName
    return (
      <div>
        <div className="info-bar pt-2">
          <div className="px-4 font-weight-bold float-left">Tracks</div>
          <div className="px-4 float-right">
            {user.displayName !== currentArtistPage &&
            <Button className="btn btn-outline-dark btn-sm mb-3" type="button" onClick={handleFollow}>{isFollowing ? 'Following' : 'Follow'}</Button>
            }
          </div>
        </div>
        <hr className="mx-4"/>
      </div>
    )
  }
}
