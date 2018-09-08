import React, { Component } from 'react'
import parseHash from './util/parse-hash'
import * as queryString from './util/query-string'
import NavBar from './components/nav-bar'
import Home from './views/home'
import UserProfile from './containers/user-profile'
import ViewProfile from './containers/view-profile'
import AccountSettings from './containers/account-settings'

export default class App extends Component {
  constructor(props) {
    super(props)
    const { path, params } = parseHash(window.location.hash)
    const user = window.localStorage.getItem('user')
    const registeredUser = window.localStorage.getItem('registeredUser')
    this.state = {
      path,
      params,
      user: JSON.parse(user) || {},
      registeredUser: JSON.parse(registeredUser) || false
    }
    this.navigate = this.navigate.bind(this)
    this.createProfile = this.createProfile.bind(this)
    this.editProfile = this.editProfile.bind(this)
    this.deleteProfile = this.deleteProfile.bind(this)
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const { path, params } = parseHash(window.location.hash)
      this.setState({ path, params })
    })
    window.addEventListener('beforeunload', () => {
      for (var key in this.state) {
        localStorage.setItem(key, JSON.stringify(this.state[key]))
      }
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
    fetch('/producers', req)
      .then(res => res.ok ? res.json() : null)
      .then(user => user && this.setState({ user, registeredUser: true }))
      .catch(err => console.error(err))
  }
  editProfile(userDetails) {
    const { id } = this.state.user
    const url = '/producers/' + id
    const req = {
      method: 'PUT',
      body: JSON.stringify(userDetails),
      headers: { 'Content-Type': 'application/json' }
    }
    fetch(url, req)
      .then(res => res.ok ? res.json() : null)
      .then(user => user && this.setState({user}))
      .catch(err => console.error(err))
  }
  deleteProfile() {
    const { id } = this.state.user
    const url = '/producers/' + id
    const req = { method: 'DELETE' }
    fetch(url, req)
      .then(res => res.ok
        ? this.setState({
          user: {},
          registeredUser: false
        })
        : alert(res.status))
      .catch(err => console.error(err))
  }
  renderView() {
    const { user, path, registeredUser } = this.state
    const { createProfile, editProfile, deleteProfile, navigate } = this
    switch (this.state.path) {
      case '' :
        return (
          <Home
            navigate = { navigate }
            path = { path }
            registeredUser = { registeredUser }/>
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
      case 'account-settings' :
        return (
          <AccountSettings
            deleteProfile = { deleteProfile }
            navigate = { navigate }
            user = { user }/>
        )
    }
  }
  render() {
    const { registeredUser, path } = this.state
    return (
      <div>
        <NavBar
          registeredUser = { registeredUser }
          path = { path } />
        { this.renderView() }
      </div>
    )
  }
}
