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
        <NavbarBrand onClick={()=> this.props.ChangePage("Home")}><img style={{width:30}}src={Logo}/></NavbarBrand>
          <NavbarBrand onClick={()=> this.props.ChangePage("Home")}>Santren Koding</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem onClick={()=> this.props.ChangePage("Kajian")}>
                <NavLink>Kajian Koding</NavLink>
              </NavItem>
              <NavItem onClick={()=> this.props.ChangePage("Mondok")}>
                <NavLink>Mondok Koding</NavLink>
              </NavItem>
              <NavItem onClick={()=> this.props.ChangePage("Kitab")}>
                <NavLink>Kitab Koding</NavLink>
              </NavItem>
              <Button>Masuk / Daftar</Button>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}