import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.png'
const Header = () => {


  return (
    <div className='header  w-100' >
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" width={"60px"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-dark">
              <Nav.Link href="#home" className='navlink' >HOME</Nav.Link>
              <Nav.Link href="#who_we_are"  className='navlink'>WHO WE ARE</Nav.Link>
              <NavDropdown  className='navlink' title="OUR WINGS" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" >
                  Youth Wing
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" >
                  Student Wing
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" >
                  Women Wing
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown  className='navlink' title="MEDIA" style={{color:"red"}} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" onClick={() => handleNavClick('youth-wing')}>
                  Youth Wing
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" onClick={() => handleNavClick('student-wing')}>
                  Student Wing
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" onClick={() => handleNavClick('women-wing')}>
                  Women Wing
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown  className='navlink' title="INSTITUTIONS" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" onClick={() => handleNavClick('youth-wing')}>
                  Youth Wing
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" onClick={() => handleNavClick('student-wing')}>
                  Student Wing
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" onClick={() => handleNavClick('women-wing')}>
                  Women Wing
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact" className='navlink'>CONTACT US</Nav.Link>
          <button className='member__btn__green  ms-md-5'>BECOME A MEMBER</button>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
