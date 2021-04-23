import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown,FormControl,Form,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {LinkContainer} from 'react-router-bootstrap';
class Header extends Component {
  render() {
   
    return (
        <div className="App">
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">COOKBOOK</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="m-auto" >
     <LinkContainer to="/">
      <Nav.Link>RECIPES</Nav.Link>
    </LinkContainer>
     <LinkContainer to="/news">
      <Nav.Link >NEWS</Nav.Link>
     </LinkContainer>
     <LinkContainer to="/chef">
      <Nav.Link>CHEF</Nav.Link>
    </LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>
 </div>
    );
  }
}
export default Header;
