import React, { Component } from 'react'
import { Jumbotron, Container, Button } from 'reactstrap'

export default class DiscoverArtists extends Component {
  constructor(props) {
    super(props)
    this.handleViewProfile = this.handleViewProfile.bind(this)
  }

  handleViewProfile(event) {
    console.log(this.props.params.artistType)
  }

  render() {
    const { filteredArtists } = this.props
    const { artistType } = this.props.params
    const { handleViewProfile } = this
    return (
      <div>
        <Container className="container bg-white mt-5">
          <Jumbotron className="bg-white pt-4 mb-0">
            <h5 className="mb-5 font-weight-bold">{ artistType === 'music-producers' ? 'Discover Producers' : 'Discover Vocalists' }</h5>
            {filteredArtists.map((artist, index) => {
              return (
                <div key= { index }>
                  <div className="profile-image-explore-view float-md-left rounded-circle" style={{ backgroundImage: `url(${artist.imageUrl})` }}></div>
                  <p className="profile-display-name-explore-view mb-0">{artist.displayName + ' (' + artist.artistType + ')'}</p>
                  <p className="profile-details-explore-view mb-0">{artist.firstName + ' ' + artist.lastName}</p>
                  <p className="profile-details-explore-view explore-view-city">{artist.city + ', ' + artist.country}</p>
                  <Button className="btn btn-outline-dark btn-sm view-profile-button" onClick={ handleViewProfile } name={ artist.id }>View Profile</Button>
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
