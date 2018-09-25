import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      dataBase: []
    }
  }
  componentDidMount() {
    fetch('/artists/')
      .then(res => res.ok ? res.json() : null)
      .then(artists => artists && this.setState({ dataBase: artists }))
      .catch(err => console.error(err))
  }

  render() {
    console.log(this.state)
    return (
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control form-control-sm mr-sm-3 search-box" type="search" placeholder="Search" aria-label="Search"/>
      </form>
    )
  }
}
