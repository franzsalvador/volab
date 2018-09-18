import React, { Component } from 'react'

export default class ViewConnections extends Component {
  constructor(props) {
    super(props)
    this.state = {
      followers: [],
      following: []
    }
    this.handleViewProfile = this.handleViewProfile.bind(this)
  }
  componentDidMount() {
    const { displayName } = this.props.params
    fetch('/artists/followers/' + displayName)
      .then(res => res.ok ? res.json() : null)
      .then(followers => this.setState({ followers: followers }))
      .catch(err => console.error(err))
    fetch('/artists/following/' + displayName)
      .then(res => res.ok ? res.json() : null)
      .then(following => this.setState({ following: following }))
      .catch(err => console.error(err))
  }
  handleViewProfile(event) {
    const { navigate } = this.props
    const displayName = event.target.name
    navigate({ path: 'view-profile', params: { 'displayName': displayName } })
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}
