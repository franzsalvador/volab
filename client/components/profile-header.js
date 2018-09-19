import React from 'react'

export default function ProfileHeader({ artist }) {
  const { displayName, firstName, lastName, city, country, imageUrl, artistType } = artist
  return (
    <div>
      <div className="profile-header p-4">
        <div className="profile-image rounded-circle float-md-left" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <p className="profile-display-name mb-0 profile-details">{displayName + ' (' + artistType + ')'}</p>
        <p className="profile-details mb-0">{firstName + ' ' + lastName}</p>
        <p className="profile-details details-location">{city + ', ' + country}</p>
      </div>
    </div>
  )
}
