import React, { Component } from 'react';
import './App.css';
import NavigationBar from '../nav/NavigationBar'
import Background from './union_square_sf.png'
import Home from '../home/Home'
import WebDevelopment from '../webDevelopment/WebDevelopment'
import Resume from '../resume/Resume'
import { 	BrowserRouter as Router, 
				 	Route 
				} from 'react-router-dom'

class App extends Component {
  render() {
		const bg = {
			backgroundImage: `url(${Background})`,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundAttachment: 'fixed',
		}
    return (
      <div className="App" style= { bg }>
   			<Router>
					<div>
						<NavigationBar />
						<Route exact path='/' component={ Home } />
						<Route path='/web-development' component={ WebDevelopment } />
						<Route path='/resume' component={Resume} />
					</div>
				</Router>
      </div>
    );
  }
}

export default App;
