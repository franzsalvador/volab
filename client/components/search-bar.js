import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      results: [],
      value: ''
    }
  }
  render() {
    return (
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control form-control-sm mr-sm-3 search-box" type="search" placeholder="Search" aria-label="Search"/>
      </form>
    )
  }
}
