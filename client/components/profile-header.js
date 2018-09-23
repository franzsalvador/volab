import React from 'react'

export default function ProfileHeader({ artist }) {
  const { displayName, firstName, lastName, city, country, imageUrl, backgroundImageUrl } = artist
  return (
    <div>
      <div className="profile-header p-4" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
        <div className="profile-image rounded-circle float-md-left border" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <p className="profile-display-name mb-2 mt-1 profile-details"><span className="py-1 px-2">{displayName}</span></p>
        <p className="profile-details mb-2"><span className="py-1 px-2">{firstName + ' ' + lastName}</span></p>
        <p className="profile-details details-location"><span className="py-1 px-2">{city + ', ' + country}</span></p>
      </div>
    </div>
  )
}
