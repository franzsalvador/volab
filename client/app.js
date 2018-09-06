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
    this.register = this.register.bind(this)
    this.handleClickProd = this.handleClickProd.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
  handleClickProd() {
    this.navigate({ path: '#create-profile?producer' })
  }
  register(userDetails) {
    const req = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: { 'Content-Type': 'application/json' }
    }
    fetch('/producers', req)
      .then(res => res.ok ? res.json() : null)
      .then(newUser => newUser && this.setState({user: newUser}))
      .catch(err => console.error(err))
  }
  handleSubmit(event) {
    event.preventDefault()
    const { displayName } = this.state.user
    const createProfileForm = event.target
    const formData = new FormData(createProfileForm)
    const user = {}
    for (var pair of formData.entries()) {
      user[pair[0]] = pair[1]
    }
    this.register(user)
    alert('Your profile has been saved.')
    this.navigate({ path: 'view-profile', params: { displayName } })
    console.log(this.state)
  }
  renderView() {
    const { user, path } = this.state
    const { handleChange, handleSubmit } = this
    switch (this.state.path) {
      case '' :
        return (
          <Home
            handleClickProd = { this.handleClickProd }/>
        )
      case 'create-profile' :
        return (
          <UserProfile
            handleChange = { handleChange }
            handleSubmit = { handleSubmit }
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
            handleChange = { handleChange }
            handleSubmit = { handleSubmit }
            user = { user }
            path = { path }/>
        )
    }
  }
  render() {
    return (
      <div>
        <NavBar/>
        {this.renderView()}
      </div>
    )
  }
}
