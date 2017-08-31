import React from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import './NavigationBar.css'
import logo from './logo.svg'
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
		<Navbar inverse collapseOnSelect >
	    <Navbar.Header >
	    	<Navbar.Brand style={navbarHeaderStyle} />
	      <Navbar.Toggle />
	    </Navbar.Header>
	    <Navbar.Collapse>
	      <Nav pullRight>
	      	<LinkContainer to='/'>
	      		<NavItem>
	      			HOME
	      		</NavItem>
	      	</LinkContainer>
					<LinkContainer to='/resume'>
						<NavItem >
							RESUME
						</NavItem>
					</LinkContainer>
	      </Nav>
	    </Navbar.Collapse>
	  </Navbar>
	)
}

export default NavigationBar
