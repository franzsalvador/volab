import React, {Component} from 'react'
import { Container, Collapse, Navbar, NavLink, NavItem, NavbarToggler, NavbarBrand, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

export default class NavBar extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    const { registeredUser, path } = this.props
    const styleWhite = { color: 'white' }
    const styleBlack = { color: 'black' }
    return (
      <div className="nav-container">
        <Container className="bg-white px-0">
          <Navbar className={ path === '' ? 'container bg-white' : 'container bg-dark' } light expand="md">
            <NavbarBrand className="font-weight-bold" id="brand" style={ path === '' ? styleBlack : styleWhite } href="/">Volab</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="mr-3" style={ path === '' ? styleBlack : styleWhite } href="/components/">
                    <i className="fas fa-music drop-down-icons"></i>
                    Add Music
                  </NavLink>
                </NavItem>
                {registeredUser === true &&
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret style={ path === '' ? styleBlack : styleWhite }>
                    <i className="fas fa-user-circle drop-down-icons"></i>
                    Me
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem className="drop-down-print" href="#edit-profile">
                      <i className="fas fa-user-edit mr-2"></i>
                      Edit Profile
                    </DropdownItem>
                    <DropdownItem href="#edit-profile">
                    </DropdownItem>
                    <DropdownItem className="drop-down-print" href="#account-settings">
                      <i className="fas fa-ellipsis-h mr-2"></i>
                      Account Settings
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                }
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>

    )
  }
}
