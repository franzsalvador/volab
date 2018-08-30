import React from 'react'

export default function ProfileSelectors(props) {
  return (
  <div id="profile-selectors">
    <button className="mr-2 btn btn-outline-dark" onClick={ props.handleClickProd } type="button">Producer</button>
    <button className="ml-2 btn btn-outline-dark" type="button">Vocalist</button>
  </div>
  )
}
