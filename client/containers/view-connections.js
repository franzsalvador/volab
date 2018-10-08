import React, { Component } from 'react'
import * as request from '../util/fetch'
import ViewFollowers from '../components/view-followers'
import ViewFollowing from '../components/view-following'

export default class ViewConnections extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artist: {},
      followers: [],
      following: []
    }
    this.updateArtist = this.updateArtist.bind(this)
    this.updateFollowers = this.updateFollowers.bind(this)
    this.updateFollowing = this.updateFollowing.bind(this)
  }
  componentDidMount() {
    const { displayName } = this.props.params
    const { updateArtist, updateFollowers, updateFollowing } = this
    request.sendFetch('/artists/displayName/' + displayName)
      .then(artist => updateArtist(artist))
    request.sendFetch('/artists/followers/' + displayName)
      .then(followers => updateFollowers(followers))
    request.sendFetch('/artists/following/' + displayName)
      .then(following => updateFollowing(following))
  }
  updateArtist(artist) {
    this.setState({ artist })
  }
  updateFollowers(followers) {
    this.setState({ followers })
  }
  updateFollowing(following) {
    this.setState({ following })
  }
  renderView() {
    const { path } = this.props
    const { artist, followers, following } = this.state
    const { handleViewProfile } = this
    switch (path) {
      case 'view-following' :
        return (
          <ViewFollowing
            artist = {artist}
            following = {following}
            path = {path}
            viewProfile = {handleViewProfile}/>
        )
      case 'view-followers' :
        return (
          <ViewFollowers
            artist = {artist}
            followers = {followers}
            path = {path}
            viewProfile = {handleViewProfile}/>
        )
    }
  }
  render() {
    return (
      <div>
        { this.renderView() }
      </div>
    )
  }
}
