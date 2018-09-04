import React, { Component } from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="bg-white fixed-top nav-bar" light expand="md">
          <div className="container">
            <NavbarBrand className="font-weight-bold" id="brand" href="/">Volab</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
          </div>
        </Navbar>
      </div>
    )
  }
}

