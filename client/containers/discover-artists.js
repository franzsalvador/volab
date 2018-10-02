import React, { Component } from 'react'
import { Jumbotron, Container, Button } from 'reactstrap'

export default class DiscoverArtists extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: '',
      filteredArtists: []
    }
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => location.reload())
    const { artistType } = this.props.params
    this.setState({ view: artistType })
    fetch('/artists/' + artistType)
      .then(res => res.ok ? res.json() : null)
      .then(filteredArtists => this.setState({ filteredArtists }))
      .catch(err => console.error(err))
  }
  render() {
    const { view, filteredArtists } = this.state
    return (
      <div>
        <Container className="container bg-white mt-5">
          <Jumbotron className="bg-white pt-4 mb-0">
            <h5 className="mb-5 font-weight-bold">
              { view === 'Music%20Producer'
                ? 'Discover Producers'
                : 'Discover Vocalists' }
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
