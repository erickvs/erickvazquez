import React from 'react'
import {Button} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import './Resume.css'

function Resume(props) {
	return (
		<div className="container">
			<div className="resume-header">
				<Button href="/resume.pdf" className='download-btn'>
						<h2>Download copy</h2>
						<FontAwesome 
									className='download-color'
									name='download' 
									size='lg'
									/>
					</Button>
			</div>
			<div className="row">
				<div className="col-md-12">
					<div id='resume-container'></div>
				</div>
			</div>
		</div>
		
	)
}

export default Resume