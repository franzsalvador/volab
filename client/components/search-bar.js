import React, { Component } from 'react'
import { ListGroup } from 'reactstrap'
import SearchListItems from './search-list-items'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      dataBase: [],
      results: []
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    fetch('/artists/')
      .then(res => res.ok ? res.json() : null)
      .then(artists => artists && this.setState({ dataBase: artists }))
      .catch(err => console.error(err))
  }
  handleSearch(event) {
    const userSearch = event.target.value
    const { dataBase } = this.state
    const results = dataBase.filter(artist => {
      for (let key in artist) {
        const artistDetails = artist[key].toString()
        if (artistDetails.toLowerCase() === userSearch.toLowerCase()) {
          return true
        }
      }
    })
    this.setState({ results })
  }
  handleBlur(event) {
    event.target.value = ''
    this.setState({ results: [] })
  }
  handleClick() {
    location.reload()
  }
  render() {
    const { handleSearch, handleBlur, handleClick } = this
    const { results } = this.state
    const listGroupClass = results.length
      ? 'search-list-results border'
      : 'search-list-results mt-1'
    return (
      <div>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control form-control-sm mt-1 mr-sm-3 search-bar"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleSearch}/>
        </form>
        <ListGroup
          className={listGroupClass}
          onMouseLeave={handleBlur}>
          <SearchListItems
            handleClick = {handleClick}
            results = {results}/>
        </ListGroup>
      </div>

    )
  }
}
