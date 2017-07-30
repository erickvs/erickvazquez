import React, { Component } from 'react';
import './App.css';
import NavigationBar from '../nav/NavigationBar'
import IntroText from '../introText/IntroText'
import ElevatorPitch from '../elevatorPitch/ElevatorPitch'
import me from './me.jpg'
import Background from './union_square_sf.png'

class App extends Component {
  render() {
  	const myPic = {
			backgroundImage: `url(${me})`,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize: 'contain',
		}
		const bg = {
			backgroundImage: `url(${Background})`,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundAttachment: 'fixed',
		}
    return (
      <div className="App" style= { bg }>
      	<NavigationBar />
      	<div className="main-container">
      		<div className="left-panel">
						<IntroText />
						<ElevatorPitch />
      		</div>
      		<div className="right-panel" style={myPic} />
      	</div>
      </div>
    );
  }
}

export default App;
