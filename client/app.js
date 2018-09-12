import React, { Component } from 'react'
import parseHash from './util/parse-hash'
import * as queryString from './util/query-string'
import NavBar from './components/nav-bar'
import Home from './views/home'
import CreateEditProfile from './containers/create-edit-profile'
import ViewProfile from './containers/view-profile'
import AccountSettings from './containers/account-settings'
import AddMusic from './containers/add-music'

export default class App extends Component {
  constructor(props) {
    super(props)
    const { path, params } = parseHash(window.location.hash)
    this.state = {
      path,
      params,
      user: {},
      registeredUser: false
    }
    this.navigate = this.navigate.bind(this)
    this.createProfile = this.createProfile.bind(this)
    this.editProfile = this.editProfile.bind(this)
    this.deleteProfile = this.deleteProfile.bind(this)
    this.addMusic = this.addMusic.bind(this)
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
    const url = '/artists'
    const req = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: { 'Content-Type': 'application/json' }
    }
    fetch(url, req)
      .then(res => res.ok ? res.json() : null)
      .then(user => user && this.setState({ user, registeredUser: true }))
      .catch(err => console.error(err))
  }
  editProfile(userDetails) {
    const { id } = this.state.user
    const url = '/artists/' + id
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
    const url = '/artists/' + id
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
  addMusic(music) {
    console.log(this.state)
    const { id } = this.state.user
    const url = '/artists/' + id
    const req = {
      method: 'PUT',
      body: JSON.stringify(music),
      headers: { 'Content-Type': 'application/json' }
    }
    fetch(url, req)
      .then(res => res.ok ? res.json() : null)
      .then(user => user && this.setState({user}))
      .catch(err => console.error(err))
  }
  renderView() {
    const { user, path, registeredUser } = this.state
    const { createProfile, editProfile, deleteProfile, addMusic, navigate } = this
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
          <CreateEditProfile
            createProfile = { createProfile }
            navigate = { navigate }
            user = { user }
            registeredUser = { registeredUser }/>
        )
      case 'view-profile' :
        return (
          <ViewProfile
            user = { user }/>
        )
      case 'edit-profile' :
        return (
          <CreateEditProfile
            editProfile = { editProfile }
            registeredUser = { registeredUser }
            navigate = { navigate }
            path = { path }
            user = { user }/>
        )
      case 'account-settings' :
        return (
          <AccountSettings
            deleteProfile = { deleteProfile }
            navigate = { navigate }
            user = { user }/>
        )
      case 'add-music' :
        return (
          <AddMusic
            addMusic = { addMusic }
            navigate = { navigate }
            path = { path }
            user = { user }/>
        )
      case 'explore-artists' :
        return (
          <AddMusic
            navigate = { navigate }
            path = { path }
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
