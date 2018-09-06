import React, { Component } from 'react'
import parseHash from './util/parse-hash'
import * as queryString from './util/query-string'
import NavBar from './components/nav-bar'
import Home from './views/home'
import UserProfile from './containers/user-profile'
import ViewProfile from './containers/view-profile'

export default class App extends Component {
  constructor(props) {
    super(props)
    const { path, params } = parseHash(window.location.hash)
    this.state = {
      path,
      params,
      user: {}
    }
    this.navigate = this.navigate.bind(this)
    this.createProfile = this.createProfile.bind(this)
    this.editProfile = this.editProfile.bind(this)
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const { path, params } = parseHash(window.location.hash)
      this.setState({ path, params })
    })
  }
  navigate({ path, params }) {
    window.location.hash = path + queryString.stringify(params)
  }
  createProfile(userDetails) {
    const req = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: { 'Content-Type': 'application/json' }
    }
    fetch('/producers/create-profile', req)
      .then(res => res.ok ? res.json() : null)
      .then(user => user && this.setState({user}))
      .catch(err => console.error(err))
  }
  editProfile(userDetails) {
    const { id } = this.state.user
    const req = {
      method: 'PUT',
      body: JSON.stringify(userDetails),
      headers: {'Content-Type': 'application/json',
        'id': id
      }
    }
    fetch('/producers/edit-profile', req)
      .then(res => res.ok ? res.json() : null)
      .then(user => user && this.setState({user}))
      .catch(err => console.error(err))
  }
  renderView() {
    const { user, path } = this.state
    const { createProfile, editProfile, navigate } = this
    switch (this.state.path) {
      case '' :
        return (
          <Home navigate = { navigate }/>
        )
      case 'create-profile' :
        return (
          <UserProfile
            createProfile = { createProfile }
            navigate = { navigate }
            user = { user }/>
        )
      case 'view-profile' :
        return (
          <ViewProfile
            user = { user }/>
        )
      case 'edit-profile' :
        return (
          <UserProfile
            editProfile = { editProfile }
            navigate = { navigate }
            user = { user }
            path = { path }/>
        )
    }
  }
  render() {
    return (
      <div>
        <NavBar/>
        { this.renderView() }
      </div>
    )
  }
}
