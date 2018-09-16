import React, { Component } from 'react'
import parseHash from './util/parse-hash'
import * as queryString from './util/query-string'
import NavBar from './components/nav-bar'
import Home from './views/home'
import CreateupdateUser from './containers/create-update-profile'
import ViewProfile from './containers/view-profile'
import AccountSettings from './containers/account-settings'
import AddMusic from './containers/add-music'
import DiscoverArtists from './containers/discover-artists'

export default class App extends Component {
  constructor(props) {
    super(props)
    const {path, params} = parseHash(window.location.hash)
    const user = window.localStorage.getItem('user')
    const registeredUser = window.localStorage.getItem('registeredUser')
    this.state = {
      path,
      params,
      user: JSON.parse(user) || {},
      registeredUser: JSON.parse(registeredUser) || false
    }
    this.navigate = this.navigate.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const {path, params} = parseHash(window.location.hash)
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
  updateUser(user) {
    this.setState({ user, registeredUser: true })
    location.reload()
  }
  deleteUser() {
    this.setState({
      user: {},
      registeredUser: false
    })
  }
  renderView() {
    const { user, path, params, registeredUser, filteredArtists } = this.state
    const { updateUser, deleteUser, navigate } = this
    switch (this.state.path) {
      case '' :
        return (
          <Home
            navigate = {navigate}
            path = {path}
            registeredUser = {registeredUser}/>
        )
      case 'create-profile' :
        return (
          <CreateupdateUser
            updateUser = {updateUser}
            navigate = {navigate}
            user = {user}
            registeredUser = {registeredUser}/>
        )
      case 'view-profile' :
        return (
          <ViewProfile
            user = {user}
            params = {params}
            updateUser = {updateUser}/>
        )
      case 'update-profile' :
        return (
          <CreateupdateUser
            updateUser = {updateUser}
            registeredUser = {registeredUser}
            navigate = {navigate}
            path = {path}
            user = {user}/>
        )
      case 'account-settings' :
        return (
          <AccountSettings
            deleteUser = {deleteUser}
            navigate = {navigate}
            user = {user}/>
        )
      case 'add-music' :
        return (
          <AddMusic
            navigate = {navigate}
            path = {path}
            user = {user}
            updateUser = {updateUser}/>
        )
      case 'discover' :
        return (
          <DiscoverArtists
            path = {path}
            params = {params}
            navigate = {navigate}
            filteredArtists = {filteredArtists }/>
        )
    }
  }
  render() {
    const { registeredUser, user } = this.state
    const { discover, navigate } = this
    return (
      <div>
        <NavBar
          registeredUser = {registeredUser }
          user = {user }
          discover = {discover }
          navigate = {navigate }/>
        {this.renderView() }
      </div>
    )
  }
}
