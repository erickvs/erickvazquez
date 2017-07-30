import React from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import './NavigationBar.css'
import logo from './logo.png'
import { LinkContainer } from 'react-router-bootstrap'

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
	      	<LinkContainer to='/'>
	      		<NavItem eventKey={1} href="http://erickvazquez.com">
	      			HOME
	      		</NavItem>
	      	</LinkContainer>
	        <LinkContainer to='/web-development'>
	        	<NavItem eventKey={2} href="http://erickvazquez.com">
	        		WEB DEVELOPMENT
	        	</NavItem>
	        </LinkContainer>
	        <LinkContainer to='/photoghraphy'>
	        	<NavItem eventKey={3} href="http://erickvazquez.com">
	        		PHOTOGRAPHY
	        	</NavItem>
	        </LinkContainer>
					<LinkContainer to='/blog'>
						<NavItem eventKey={4} href="http://erickvazquez.com">
							BLOG
						</NavItem>
					</LinkContainer>
	      </Nav>
	    </Navbar.Collapse>
	  </Navbar>
	)
}

export default NavigationBar
