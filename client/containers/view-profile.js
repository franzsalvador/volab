import React, { Component } from 'react'
import { Container } from 'reactstrap'
import MusicSection from '../components/music-section'
import ProfileHeader from '../components/profile-header'
import ProfileSideBar from '../components/profile-side-bar'
import InfoBar from '../components/info-bar'

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
    const { user } = this.props
    return (
      <div>
        <Container className="container clear-border bg-white px-0">
          <ProfileHeader
            artist = { artist }
            user = { user }/>
          <InfoBar
            artist = { artist }
            user = { user }/>
          <MusicSection artist = { artist }/>
          <ProfileSideBar
            artist = { artist }/>
        </Container>
      </div>
    )
  }
}
