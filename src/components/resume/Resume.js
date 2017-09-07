import React from 'react'
import {Button} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import './Resume.css'

const downloadResumeBtn = (
	<Button href="/resume.pdf" className='download-btn'>
		<h2>Download copy</h2>
		<FontAwesome 
					className='download-color'
					name='download' 
					size='lg'
					/>
	</Button>
	)


function Resume(props) {
	return (
		<div className='resume-header'>
			<div className="container">
				<h1>RESUME</h1>
				<div id='download-button-container'>
					{ downloadResumeBtn }
				</div>
				
			</div>
		</div>
	)
}

export default Resume