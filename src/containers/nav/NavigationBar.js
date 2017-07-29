import React from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import './NavigationBar.css'
import logo from './logo.png'

function NavigationBar(props) {
	// Background image
	const navbarHeaderStyle = {
		margin: '15px 15px',
		backgroundImage: `url(${logo})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'left center',
		backgroundSize: 'contain'
	}
	return(
		<Navbar inverse collapseOnSelect fluid>
	    <Navbar.Header style={navbarHeaderStyle}>
	      <Navbar.Brand>
	      </Navbar.Brand>
	      <Navbar.Toggle />
	    </Navbar.Header>
	    <Navbar.Collapse>
	      <Nav pullRight>
	        <NavItem eventKey={1} href="http://erickvazquez.com">HOME</NavItem>
	        <NavItem eventKey={2} href="http://erickvazquez.com">WEB DEVELOPMENT</NavItem>
	        <NavItem eventKey={3} href="http://erickvazquez.com">PHOTOGRAPHY</NavItem>
	        <NavItem eventKey={4} href="http://erickvazquez.com">BLOG</NavItem>
	      </Nav>
	    </Navbar.Collapse>
	  </Navbar>
	)
}

export default NavigationBar
