import React, { Component } from 'react'
import { ListGroup } from 'reactstrap'

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
    return (
      <div>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control form-control-sm mt-1 mr-sm-3" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch}/>
        </form>
        <ListGroup className={results.length ? 'search-list-results border' : 'search-list-results mt-1'} onMouseLeave={handleBlur}>
          {results.map((artist, index) => {
            return (
              <a className="search-list-item btn btn-outline-dark btn-sm p-2" key={index} onClick={handleClick} href={'#' + artist.displayName}>
                <div className="profile-image-nav rounded-circle" style={{backgroundImage: `url(${artist.imageUrl})`}}></div>
                <div className="search-list-item-display-name float-left ml-5">{artist.displayName}</div>
              </a>
            )
          })}
        </ListGroup>
      </div>

    )
  }
}
