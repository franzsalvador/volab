import React, {Component} from 'react'
import { Collapse, Navbar, NavLink, NavItem, NavbarToggler, NavbarBrand, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

export default class NavBar extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
    this.handleDiscoverArtists = this.handleDiscoverArtists.bind(this)
    this.handleViewProfile = this.handleViewProfile.bind(this)
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  handleDiscoverArtists(event) {
    const artistType = event.target.id
    const { navigate } = this.props
    navigate({ path: 'discover', params: { 'artistType': artistType } })
  }
  handleViewProfile() {
    const { user, navigate } = this.props
    navigate({path: 'view-profile', params: { 'displayName': user.displayName }})
  }
  render() {
    const { registeredUser, user } = this.props
    const { handleDiscoverArtists, handleViewProfile } = this
    return (
      <div>
        <Navbar className="container border-bottom" light expand="md">
          <NavbarBrand className="font-weight-bold nav-items" id="brand" href="/">Volab</NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          {registeredUser === true &&
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle href="#Discover" className="menu-items" nav caret>
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
                  <NavLink className="menu-items" href="#add-music">
                    <i className="fas fa-music drop-down-icons"></i>
                    Add Music
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret className="menu-items">
                    <div className="profile-image-nav rounded-circle mx-2" style={{ backgroundImage: `url(${user.imageUrl})` }}></div>
                    Me
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem className="drop-down-print" onClick={ handleViewProfile }>
                      <i className="far fa-user-circle mr-2"></i>
                      Profile
                    </DropdownItem>
                    <DropdownItem className="drop-down-print" href='#update-profile'>
                      <i className="fas fa-user-edit mr-1"></i>
                      Update Profile
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
      </div>
    )
  }
}
