import React from 'react'
import FontAwesome from 'react-fontawesome'
import './ElevatorPitch.css'

function ElevatorPitch(props) {
	return (
		<div className='elevator-pitch-container'>
			<h3 className="welcome">
				Hello!
			</h3>
			<p className="elevator-pitch">
				I am Erick! I am a fresh graduate from SJSU (Go Spartans!) with a
				bachelors in computer science. I am an aspiring web developer and I 
				love creating web apps with React and Redux. 
			</p>
			<p>
				<FontAwesome name='exclamation-triangle' />
				Pardon the empty pages, this site is under construction
				<FontAwesome name='exclamation-triangle' />
			</p>
			<p className='last-updated'>LAST UPDATED ON: 
				Tue Sep 26 2017 23:59:56 GMT-0700 (PDT)
			</p>
		</div>
	)
}

export default ElevatorPitch