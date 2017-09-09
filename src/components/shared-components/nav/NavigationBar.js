import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import NavItem from './NavItem/NavItem' // Until official patch is released.
import './NavigationBar.css'
import logo from './logo.svg'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'
import FontAwesome from 'react-fontawesome'

function NavigationBar(props) {
	return(
		  <Navbar inverse collapseOnSelect>
		    <Navbar.Header>
		      <Navbar.Brand>
		        <a href="/" >
							<img id='logo' src={logo} alt='erick vazquez' height='30px'/>
		        </a>
		      </Navbar.Brand>
		      <Navbar.Toggle />
		    </Navbar.Header>
		    <Navbar.Collapse>
		      <Nav pullRight>
		      	<IndexLinkContainer to='/'>
							<NavItem>Home</NavItem>
		      	</IndexLinkContainer>
		      	<LinkContainer to='/projects'>
		        	<NavItem>Projects</NavItem>
		        </LinkContainer>
		        <LinkContainer to='/resume'>
		        	<NavItem>Resume</NavItem>
		        </LinkContainer>
		        <LinkContainer to='/blog'>
		        	<NavItem>Blog</NavItem>
		        </LinkContainer>
		        <LinkContainer to='/contact'>
		        	<NavItem>Contact</NavItem>
		        </LinkContainer>
		        <NavItem eventKey={1} 
		        				 href='https://www.linkedin.com/in/erickvazquez/' 
		        				 className='social-media-links' >
		        	<FontAwesome name='linkedin-square' size='2x' />
		        </NavItem>
		        <NavItem eventKey={2} 
		        				 href="https://github.com/erickvs" 
		        				 className='social-media-links' >
		        	<FontAwesome name='github' size='2x' />
		        </NavItem>
		      </Nav>
		    </Navbar.Collapse>
		  </Navbar>
	)
}

export default NavigationBar
