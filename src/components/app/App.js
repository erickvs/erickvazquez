import React, { Component } from 'react';
import './App.css';
import Home from '../home/Home'
import Resume from '../resume/Resume'
import NavigationBar from '../shared-components/nav/NavigationBar'
import Footer from '../shared-components/footer/Footer'
import Projects from '../projects/Projects'
import Blog from '../blog/Blog'
import Contact from '../contact/Contact'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
   			<Router>
					<div>
						<NavigationBar />
						<Route exact path='/' component={ Home } />
						<Route path='/resume' component={Resume} />
						<Route path='/projects' component={ Projects } />
						<Route path='/blog' component={ Blog } />
						<Route path='/contact' component={ Contact } />
						<Footer />
					</div>
				</Router>
      </div>
    );
  }
}

export default App;
