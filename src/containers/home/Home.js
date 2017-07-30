import React from 'react'
import IntroText from '../introText/IntroText'
import ElevatorPitch from '../elevatorPitch/ElevatorPitch'
import me from './me.jpg'
import './home.css'

function Home(props) {
	const myPic = {
			backgroundImage: `url(${me})`,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize: 'contain',
			height: '400px'
		}
	return(
		<div className="main-container">
  		<div className="left-panel">
				<IntroText />
				<ElevatorPitch />
  		</div>
  		<div className="right-panel" style={myPic} />
  	</div>
	)
}

export default Home