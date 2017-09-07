import React from 'react'
import IntroText from '../introText/IntroText'
import ElevatorPitch from '../elevatorPitch/ElevatorPitch'
import Footer from '../footer/Footer'
import NavigationBar from '../nav/NavigationBar'
import ProjectSlider from '../project-slider/ProjectSlider'
import './home.css'

const homeHeader = (
	<div className="home-header">
		<NavigationBar />
		<ProjectSlider />
	</div>
)

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
		<div className="home">
			{ homeHeader }
			{ pitchAndMyPicture }
			<Footer />
		</div>
	)
}

export default Home