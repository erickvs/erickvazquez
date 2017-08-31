import React, { Component } from 'react';
import './App.css';
import NavigationBar from '../nav/NavigationBar'
import Home from '../home/Home'
import Resume from '../resume/Resume'
import { 	BrowserRouter as Router, 
				 	Route 
				} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
   			<Router>
					<div>
						<NavigationBar />
						<Route exact path='/' component={ Home } />
						<Route path='/resume' component={Resume} />
					</div>
				</Router>
      </div>
    );
  }
}

export default App;
