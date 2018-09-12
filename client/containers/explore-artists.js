import React, { Component } from 'react'
import { Jumbotron, Container } from 'reactstrap'

export default class exploreArtists extends Component {

  render() {
    const { filteredArtists } = this.props
    return (
      <div>
        <Container className="container bg-white mt-5">
          <Jumbotron className="bg-white pt-4 mb-0">
            {filteredArtists.map((artist, index) => {
              return (
                <div key= { index }>
                  <div className="profile-image-explore-view float-md-left rounded-circle" style={{ backgroundImage: `url(${artist.imageUrl})` }}></div>
                  <p className="profile-display-name-explore-view mb-0">{artist.displayName + ' (' + artist.artistType + ')'}</p>
                  <p className="profile-details-explore-view mb-0">{artist.firstName + ' ' + artist.lastName}</p>
                  <p className="profile-details-explore-view explore-view-city">{artist.city + ', ' + artist.country}</p>
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
