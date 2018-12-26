import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import Logo from '../assets/logo.png'

export default class Example extends React.Component {
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
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><img style={{width:30}}src={Logo}/></NavbarBrand>
          <NavbarBrand href="/">Santren Koding</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Kajian Koding</NavLink>
              </NavItem>
              <NavItem>
                <NavLink >Mondok Koding</NavLink>
              </NavItem>
              <NavItem>
                <NavLink >Kitab Koding</NavLink>
              </NavItem>
              <Button>Masuk / Daftar</Button>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}