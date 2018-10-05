import React from 'react'
import { Container, Button } from 'reactstrap'

function FollowersList({followers}) {
  return (
    followers.map(artist => {
      return (
        <div key= { artist.id } className="float-left m-4">
          <div
            className="profile-image-connection-view rounded-circle mx-auto border"
            style={{ backgroundImage: `url(${artist.imageUrl})` }}></div>
          <div
            className="mt-3 text-center">
            <p className="profile-details-explore-view mb-2">
              {artist.firstName + ' ' + artist.lastName}
            </p>
            <Button
              className="btn btn-outline-dark btn-sm"
              href={'#' + artist.displayName}>
              View Profile
            </Button>
          </div>
        </div>
      )
    })
  )
}

export default function ViewFollowers({ artist, path, followers }) {
  return (
    <Container className="container connection-view-container bg-white pt-3">
      <div className="pt-3 container d-inline-block">
        <div
          className="artist-image-connection-view rounded-circle pt-5 mr-3 float-left border"
          style={{ backgroundImage: `url(${artist.imageUrl})` }}></div>
        <h2
          className="font-weight-bold">{ artist.displayName }</h2>
      </div>
      <h5 className="px-3 pt-3 font-weight-bold">
        { path === 'view-followers' ? 'Followers' : 'Following' }
      </h5>
      <hr className="px-3"/>
      <FollowersList
        followers = {followers}/>
    </Container>
  )
}
