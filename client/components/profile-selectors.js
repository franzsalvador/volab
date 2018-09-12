import React from 'react'

export default class ProfileSelectors extends React.Component {
  constructor(props) {
    super(props)
    this.handleCreateProfile = this.handleCreateProfile.bind(this)
  }

  handleCreateProfile() {
    const { navigate } = this.props
    navigate({ path: 'create-profile' })
  }

  render() {
    const { handleCreateProfile } = this
    return (
      <div className="mb-5" id="profile-selectors">
        <button className="mr-2 btn btn-outline-light" onClick={ handleCreateProfile } type="button">Get Started!</button>
      </div>
    )
  }
}
