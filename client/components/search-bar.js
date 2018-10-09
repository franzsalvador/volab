import React, { Component } from 'react'
import * as request from '../util/fetch'
import { ListGroup } from 'reactstrap'
import SearchListItems from './search-list-items'

const debounce = (fn, time) => {
  let timeout
  return function () {
    const functionCall = () => fn.apply(this, arguments)
    clearTimeout(timeout)
    timeout = setTimeout(functionCall, time)
  }
}

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      results: []
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.findData = debounce(this.findData.bind(this), 600)
    this.handleBlur = this.handleBlur.bind(this)
  }
  componentDidMount() {
    request.sendFetch('/artists/')
      .then(artists => this.setState({ dataBase: artists }))
  }
  handleSearch(event) {
    const userInput = event.target.value
    const { findData } = this
    findData(userInput)
  }
  findData(userInput) {
    const url = '/artists/search/' + userInput
    request.sendFetch(url)
      .then(results => this.setState({ results }))
  }
  handleBlur(event) {
    event.target.value = ''
    this.setState({ results: [] })
  }
  render() {
    const { handleSearch, handleBlur } = this
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
            onKeyUp={handleSearch}/>
        </form>
        <ListGroup
          className={listGroupClass}
          onMouseLeave={handleBlur}>
          <SearchListItems
            results = {results}/>
        </ListGroup>
      </div>

    )
  }
}
