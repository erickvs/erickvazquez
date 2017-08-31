import React from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import './NavigationBar.css'
import logo from './logo.svg'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'

function NavigationBar(props) {
	return(
		  <Navbar inverse collapseOnSelect>
		    <Navbar.Header>
		      <Navbar.Brand>
		        <a href="/" >
							<img 
								id='logo'
								src={logo} 
								alt='erick vazquez'
								height='60px'/>
		        </a>
		      </Navbar.Brand>
		      <Navbar.Toggle />
		    </Navbar.Header>
		    <Navbar.Collapse>
		      <Nav pullRight>
		      	<IndexLinkContainer to='/'>
							<NavItem>HOME</NavItem>
		      	</IndexLinkContainer>
		        <LinkContainer to='/resume'>
		        	<NavItem>RESUME</NavItem>
		        </LinkContainer>
		      </Nav>
		    </Navbar.Collapse>
		  </Navbar>
	)
}

export default NavigationBar
