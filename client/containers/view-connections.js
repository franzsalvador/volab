import React, { Component } from 'react'
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
    this.handleViewProfile = this.handleViewProfile.bind(this)
  }
  componentDidMount() {
    const { displayName } = this.props.params
    fetch('/artists/displayName/' + displayName)
      .then(res => res.ok ? res.json() : null)
      .then(artist => artist && this.setState({ artist }))
      .catch(err => console.error(err))
    fetch('/artists/followers/' + displayName)
      .then(res => res.ok ? res.json() : null)
      .then(followers => this.setState({ followers: followers }))
      .catch(err => console.error(err))
    fetch('/artists/following/' + displayName)
      .then(res => res.ok ? res.json() : null)
      .then(following => this.setState({ following: following }))
      .catch(err => console.error(err))
  }
  handleViewProfile(event) {
    const { navigate } = this.props
    const displayName = event.target.name
    navigate({ path: 'view-profile', params: { 'displayName': displayName } })
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
