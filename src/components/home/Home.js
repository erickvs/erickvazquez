import React from 'react'
import ElevatorPitch from './elevatorPitch/ElevatorPitch'
import ProjectSlider from './project-slider/ProjectSlider'
import './home.css'

const pitchAndMyPicture = (
	<div className="pitch-and-pic-container">
		<div className="container">
			<div className="col-md-6">
				<ElevatorPitch />
			</div>
			<div className="col-md-6">
				<div id="myPic" ></div>
			</div>
		</div>
	</div>
)


function Home(props) {
	return(
		<div>
			<ProjectSlider />
			{ pitchAndMyPicture }
		</div>
	)
}

export default Home