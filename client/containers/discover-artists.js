import React, { Component } from 'react'
import * as request from '../util/fetch'
import { Jumbotron, Container, Button } from 'reactstrap'

export default class DiscoverArtists extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: '',
      filteredArtists: []
    }
    this.updateFilteredArtists = this.updateFilteredArtists.bind(this)
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => location.reload())
    const { artistType } = this.props.params
    const { updateFilteredArtists } = this
    const url = '/artists/' + artistType
    request.get(url, updateFilteredArtists)
    this.setState({ view: artistType })
  }
  updateFilteredArtists(filteredArtists) {
    this.setState({ filteredArtists })
  }
  render() {
    const { view, filteredArtists } = this.state
    const discoverPageHeading =
      view === 'Music%20Producer'
        ? 'Discover Producers'
        : 'Discover Vocalists'
    return (
      <div>
        <Container className="container bg-white mt-5">
          <Jumbotron className="bg-white pt-4 mb-0">
            <h5 className="mb-5 font-weight-bold">
              {discoverPageHeading}
            </h5>
            {filteredArtists.map(artist => {
              return (
                <div key= { artist.id }>
                  <div
                    className="profile-image-explore-view float-md-left rounded-circle"
                    style={{ backgroundImage: `url(${artist.imageUrl})` }}></div>
                  <p className="profile-display-name-explore-view mb-0">
                    {artist.displayName + ' (' + artist.artistType + ')'}
                  </p>
                  <p className="profile-details-explore-view mb-0">
                    {artist.firstName + ' ' + artist.lastName}
                  </p>
                  <p className="profile-details-explore-view explore-view-city">
                    {artist.city + ', ' + artist.country}
                  </p>
                  <Button className="btn btn-outline-dark btn-sm view-profile-button"
                    href={'/#' + artist.displayName}>
                    View Profile
                  </Button>
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
