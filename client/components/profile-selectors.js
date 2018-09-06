import React from 'react'

export default class ProfileSelectors extends React.Component {
  constructor(props) {
    super(props)
    this.handleClickProducers = this.handleClickProducers.bind(this)
  }

  handleClickProducers() {
    const { navigate } = this.props
    navigate({ path: '#create-profile?producer' })
  }

  render() {
    const { handleClickProducers } = this
    return (
      <div className="mb-5" id="profile-selectors">
        <button className="mr-2 btn btn-outline-light" onClick={ handleClickProducers } type="button">Producer</button>
        <button className="ml-2 btn btn-outline-light" type="button">Vocalist</button>
      </div>
    )
  }
}
