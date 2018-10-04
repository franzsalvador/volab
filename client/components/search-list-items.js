import React from 'react'

export default function SearchListItems(props) {
  const {handleClick, results} = props
  return (
    results.map((artist, index) => {
      return (
        <a
          className="search-list-item btn btn-outline-dark btn-sm p-2"
          key={index} onClick={handleClick}
          href={'#' + artist.displayName}>
          <div
            className="profile-image-nav rounded-circle"
            style={{backgroundImage: `url(${artist.imageUrl})`}}></div>
          <div
            className="search-list-item-display-name float-left ml-5">
            {artist.displayName}
          </div>
        </a>
      )
    })
  )
}
