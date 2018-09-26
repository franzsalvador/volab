import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      dataBase: [],
      results: []
    }
    this.handleSearch = this.handleSearch.bind(this)
  }
  componentDidMount() {
    fetch('/artists/')
      .then(res => res.ok ? res.json() : null)
      .then(artists => artists && this.setState({ dataBase: artists }))
      .catch(err => console.error(err))
  }

  handleSearch(event) {
    console.log(event.target.value)
    const { dataBase } = this.state
    const results = dataBase.filter(artist => {
      for (let key in artist) {
        if ((artist[key]) === event.target.value) {
          return true
        }
      }
    })
    this.setState({ results })
  }

  render() {
    console.log(this.state)
    const { handleSearch } = this
    return (
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control form-control-sm mr-sm-3 search-box" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch}/>
      </form>
    )
  }
}
