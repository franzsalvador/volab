import React, {Component} from 'react'
import { Container, Collapse, Navbar, NavLink, NavItem, NavbarToggler, NavbarBrand, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

export default class NavBar extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
    this.handleDiscoverArtists = this.handleDiscoverArtists.bind(this)
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  handleDiscoverArtists(event) {
    const artistType = event.target.id
    const path = event.target.name
    const { discover } = this.props
    fetch('/artists/' + artistType)
      .then(res => res.ok ? res.json() : null)
      .then(filteredArtists => discover(filteredArtists, path))
      .catch(err => console.error(err))
  }
  render() {
    const { registeredUser, path } = this.props
    const { handleDiscoverArtists } = this
    const styleWhite = { color: 'white' }
    const styleBlack = { color: 'black' }
    return (
      <div className={ path === '' ? 'nav-container' : 'nav-container bg-dark' }>
        <Container className="bg-white px-0">
          <Navbar className={ path === '' ? 'container bg-white py-2' : 'container bg-dark py-2' } light expand="md">
            <NavbarBrand className="font-weight-bold py-0 nav-items" id="brand" style={ path === '' ? styleBlack : styleWhite } href="/">Volab</NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            {registeredUser === true &&
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle href="#Discover" className="menu-items" nav caret style={ path === '' ? styleBlack : styleWhite }>
                    <i className="fas fa-search drop-down-icons"></i>
                    Discover Artists
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem className="drop-down-print" id="Music Producer" name="music-producers" onClick={ handleDiscoverArtists }>
                      Music Producers
                    </DropdownItem>
                    <DropdownItem className="drop-down-print" id="Vocalist" name="vocalists" onClick={ handleDiscoverArtists }>
                      Vocalists
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink className="mr-3 menu-items" href="#add-music"style={ path === '' ? styleBlack : styleWhite }>
                    <i className="fas fa-music drop-down-icons"></i>
                    Add Music
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret className="menu-items" style={ path === '' ? styleBlack : styleWhite }>
                    <i className="fas fa-user-circle drop-down-icons"></i>
                    Me
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem className="drop-down-print" href="#view-profile">
                      <i className="far fa-user-circle mr-2"></i>
                      Profile
                    </DropdownItem>
                    <DropdownItem className="drop-down-print" href="#edit-profile">
                      <i className="fas fa-user-edit mr-1"></i>
                      Edit Profile
                    </DropdownItem>
                    <DropdownItem className="drop-down-print" href="#account-settings">
                      <i className="fas fa-ellipsis-h mr-2"></i>
                      Account Settings
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
            }
          </Navbar>
        </Container>
      </div>
    )
  }
}
