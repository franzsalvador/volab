import React, { Component } from 'react'
import parseHash from './util/parse-hash'
import * as queryString from './util/query-string'
import NavBar from './components/nav-bar'
import Home from './views/home'
import CreateProducerProfile from './containers/create-profile'

export default class App extends Component {
  constructor(props) {
    super(props)
    const { path, params } = parseHash(window.location.hash)
    this.state = {
      path,
      params,
    }
    this.handleClickProd=this.handleClickProd.bind(this)
    this.navigate = this.navigate.bind(this)
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const { path, params } = parseHash(window.location.hash)
      this.setState({ path, params })
      console.log(this.state)
    })
  }
  navigate({ path, params }) {
    window.location.hash = path + queryString.stringify(params)
  }
  handleClickProd() {
    this.navigate({ path: '#create-profile?producer' })
  }
  renderView() {
    switch (this.state.path) {
      case '' :
        return (
          <Home
          handleClickProd={ this.handleClickProd }/>
        )
      case 'create-profile' :
        return (
          <CreateProducerProfile/>
        )
    }
  }
  render() {
    return (
      <div className="container clear-border">
        <NavBar/>
        {this.renderView()}
      </div>
    )
  }
}
