import React, { Component } from 'react'
import { Container } from 'reactstrap'
import * as request from '../util/fetch'
import MusicSection from '../components/music-section'
import ProfileHeader from '../components/profile-header'
import ProfileSideBar from '../components/profile-side-bar'
import InfoBar from '../components/info-bar'

export default class ViewProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artist: {},
      messageModal: false
    }
    this.updateArtist = this.updateArtist.bind(this)
  }
  componentDidMount() {
    const displayName = this.props.path
    const { updateArtist } = this
    const url = '/artists/displayName/' + displayName
    request.get(url, updateArtist)
  }
  updateArtist(artist) {
    this.setState({ artist })
  }
  render() {
    const { artist } = this.state
    const { user, navigate, updateUser, path } = this.props
    const { updateArtist } = this
    return (
      <div>
        <Container className="container clear-border bg-white px-0">
          <ProfileHeader
            artist = {artist}
            user = {user}/>
          <InfoBar
            artist = {artist}
            user = {user}
            updateUser = {updateUser}
            updateArtist = {updateArtist}
            displayName = {path}/>
          <MusicSection artist = {artist}/>
          <ProfileSideBar
            navigate = {navigate}
            artist = {artist}/>
        </Container>
      </div>
    )
  }
}
