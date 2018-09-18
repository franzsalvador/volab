import React, { Component } from 'react'
import { Jumbotron, Container, Button } from 'reactstrap'

export default class ViewConnections extends Component {
  constructor(props) {
    super(props)
    this.state = {
      followers: [],
      following: []
    }
    this.handleViewProfile = this.handleViewProfile.bind(this)
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => location.reload())
    const { artist } = this.props.params
    fetch('/artists/followers/' + artist)
      .then(res => res.ok ? res.json() : null)
      .then(followers => this.setState({ followers }))
      .catch(err => console.error(err))
    fetch('/artists/followering/' + artist)
      .then(res => res.ok ? res.json() : null)
      .then(followers => this.setState({ followers }))
      .catch(err => console.error(err))
  }
  handleViewProfile(event) {
    const { navigate } = this.props
    const displayName = event.target.name
    navigate({ path: 'view-profile', params: { 'displayName': displayName } })
  }
  render() {
    console.log(this.state)
    const { path } = this
    const { followers } = this.state
    const { handleViewProfile } = this
    return (
      <div>
        <Container className="container bg-white mt-5">
          <Jumbotron className="bg-white pt-4 mb-0">
            <h5 className="mb-5 font-weight-bold">{ path === 'view-followers' ? 'Followers' : 'Following' }</h5>
            {followers.map((artist, index) => {
              return (
                <div key= { index }>
                  <div className="profile-image-explore-view float-md-left rounded-circle" style={{ backgroundImage: `url(${artist.imageUrl})` }}></div>
                  <p className="profile-display-name-explore-view mb-0">{artist.displayName + ' (' + artist.artistType + ')'}</p>
                  <p className="profile-details-explore-view mb-0">{artist.firstName + ' ' + artist.lastName}</p>
                  <p className="profile-details-explore-view explore-view-city">{artist.city + ', ' + artist.country}</p>
                  <Button className="btn btn-outline-dark btn-sm view-profile-button" onClick={handleViewProfile} name={artist.displayName}>View Profile</Button>
                  <hr className="theme-break"/>
                </div>
              )
            })}
          </Jumbotron>
        </Container>
      </div>
    )
  }
}
