import React from 'react'
import IntroText from '../introText/IntroText'
import ElevatorPitch from '../elevatorPitch/ElevatorPitch'
import Footer from '../footer/Footer'
import './home.css'

function Home(props) {
	return(
		<div className="container">
  		<div className="row">
				<div className="col-md-6">
					<IntroText />
					<ElevatorPitch />
				</div>
				<div className="col-md-6" >
					<div id="myPic" ></div>
  			</div>
  		</div>
  		<div className="row">
				<Footer />
  		</div>
  	</div>
	)
}

export default Home