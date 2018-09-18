import React from 'react'
import { Container, Button } from 'reactstrap'

export default function ViewFollowers(props) {
  const { artist, path, viewProfile, followers } = props
  return (
    <Container className="container connection-view-container bg-white pt-3">
      <div className="pt-3 container d-inline-block">
        <div className="artist-image-connection-view rounded-circle pt-5 mr-3 float-left" style={{ backgroundImage: `url(${artist.imageUrl})` }}></div>
        <h2 className="font-weight-bold">{ artist.displayName }</h2>
      </div>
      <h5 className="px-3 pt-3 font-weight-bold">{ path === 'view-followers' ? 'Followers' : 'Following' }</h5>
      <hr className="px-3"/>
      {followers.map((artist, index) => {
        return (
          <div key= { index } className="float-left mx-3">
            <div className="profile-image-connection-view rounded-circle mx-auto" style={{ backgroundImage: `url(${artist.imageUrl})` }}></div>
            <div className="mt-3 text-center">
              <Button className="btn btn-outline-dark btn-sm" onClick={viewProfile} name={artist.displayName}>View Profile</Button>
            </div>
          </div>
        )
      })}
    </Container>
  )
}
