import React, {Component} from 'react'
import * as queryString from '../util/query-string'
import { Collapse, Navbar, NavLink, NavItem, NavbarToggler, NavbarBrand, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import SearchBar from './search-bar'

export default class NavBar extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
    this.reload = this.reload.bind(this)
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  reload() {
    location.reload()
  }
  render() {
    const { registeredUser, user, path, navigate } = this.props
    const { reload } = this
    return (
      <div>
        <header className={path === '' ? 'bg-white' : ''}>
          <Navbar className="container border-bottom" light expand="md">
            <NavbarBrand
              className="font-weight-bold"
              id="brand" href="/">Volab
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            {registeredUser === true &&
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <SearchBar
                    navigate = {navigate}/>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle className="menu-items" nav caret>
                      <i className="fas fa-search drop-down-icons"></i>
                      Discover Artists
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem
                        href={'#discover' + queryString.stringify({'artistType': 'Music Producer'})}
                        className="drop-down-print"
                        name="music-producers">
                        Music Producers
                      </DropdownItem>
                      <DropdownItem
                        href={'#discover' + queryString.stringify({'artistType': 'Vocalist'})}
                        className="drop-down-print"
                        name="vocalists">
                        Vocalists
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <NavLink className="menu-items" href="#add-music">
                      <i className="fas fa-music drop-down-icons"></i>
                      Add Music
                    </NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret className="menu-items">
                      <div
                        className="profile-image-nav rounded-circle mx-md-2 mr-sm-2"
                        style={{backgroundImage: `url(${user.imageUrl})`}}>
                      </div>
                      Me
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem
                        href={'#' + user.displayName}
                        className="drop-down-print"
                        onClick={reload}>
                        <i className="far fa-user-circle mr-2"></i>
                        Profile
                      </DropdownItem>
                      <DropdownItem
                        className="drop-down-print"
                        href='#update-profile'>
                        <i className="fas fa-user-edit mr-1"></i>
                        Update Profile
                      </DropdownItem>
                      <DropdownItem
                        className="drop-down-print"
                        href="#account-settings">
                        <i className="fas fa-ellipsis-h mr-2"></i>
                        Account Settings
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            }
          </Navbar>
        </header>
      </div>
    )
  }
}
