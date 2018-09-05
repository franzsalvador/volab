import React, { Component } from 'react'
import parseHash from './util/parse-hash'
import * as queryString from './util/query-string'
import NavBar from './components/nav-bar'
import Home from './views/home'
import CreateProducerProfile from './containers/create-profile'
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
    this.handleChange = this.handleChange.bind(this)
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
  register(userProfile) {
    const req = {
      method: 'POST',
      body: JSON.stringify(userProfile),
      headers: { 'Content-Type': 'application/json' }
    }
    fetch('/create-profile', req)
      .then(res => res.ok)
      .catch(err => console.error(err))
  }
  handleChange({ target: { name, value } }) {
    const {user} = this.state
    this.setState(Object.assign(user, { [name]: value }))
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
    this.setState({user})
    alert('Your profile has been saved.')
    this.register(this.state.user)
    this.navigate({ path: 'view-profile', params: { displayName } })
  }
  renderView() {
    const { user } = this.state
    const { handleChange, handleSubmit } = this
    switch (this.state.path) {
      case '' :
        return (
          <Home
            handleClickProd = { this.handleClickProd }/>
        )
      case 'create-profile' :
        return (
          <CreateProducerProfile
            handleChange = { handleChange }
            handleSubmit = { handleSubmit }
            user = { user }/>
        )
      case 'view-profile' :
        return (
          <ViewProfile
            user = { user }/>
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
