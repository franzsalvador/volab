import React, { Component } from 'react';


export default class ViewProfile extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {displayName, firstName, lastName, city, country, imageUrl, bio} = this.props.user
    return (
      <div>
        <div className="container profile-header">
          <div className="row banner">
            <div className="col-3 profile-image-section">
              <img className="image-preview-box mx-auto border" src={imageUrl}></img>
            </div>
            <div className="col">
              <h4>{displayName}</h4>
              <h6>{firstName + ' ' +lastName}</h6>
              <h6>{city + ', ' + country}</h6>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div id="add-music-prompt" className="align-middle">You aren't sharing any music. Add music so people can hear you sound!</div>
            </div>
            <div className="col" id="bio-section">
              <div>{bio}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
