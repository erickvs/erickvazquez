import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Resume from './components/resume/Resume'
import Projects from './components/projects/Projects'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import NavigationBar from './components/shared-components/nav/NavigationBar'
import Footer from './components/shared-components/footer/Footer'

function EVRouter(props) {
	return(
		<div>
 			<Router>
				<div>
					<NavigationBar />
					<Route exact path='/' component={ Home } />
					<Route path='/resume' component={ Resume } />
					<Route path='/projects' component={ Projects } />
					<Route path='/blog' component={ Blog } />
					<Route path='/contact' component={ Contact } />
					<Footer />
				</div>
			</Router>
    </div>
	)
}

export default EVRouter