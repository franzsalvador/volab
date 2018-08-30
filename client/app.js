import React, { Component } from 'react'
import Home from './views/home'
import parseHash from './util/parse-hash'
import * as queryString from './util/query-string'

export default class App extends Component {
  constructor(props) {
    super(props)
    const { path, params } = parseHash(window.location.hash)
    this.state = {
      path,
      params,
    }
    this.handleClickProd=this.handleClickProd.bind(this)
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
    location.href='create-producer'
  }
  renderView() {
    switch (this.state.path) {
      case '' :
        return (
          <Home
          handleClickProd={ this.handleClickProd }/>
        )
      case 'create-producer' :
        return (
          <create-producer-form
          handleSave={this.handleSave}/>
        )
    }
  }
  render() {
    return (
      <div className="container">
       {this.renderView()}
      </div>
    )
  }
}
