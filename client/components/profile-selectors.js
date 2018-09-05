import React from 'react'

export default function ProfileSelectors(props) {
  return (
    <div className="mb-5" id="profile-selectors">
      <button className="mr-2 btn btn-outline-light" onClick={ props.handleClickProd } type="button">Producer</button>
      <button className="ml-2 btn btn-outline-light" type="button">Vocalist</button>
    </div>
  )
}
