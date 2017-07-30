import React from 'react'
import App from '../app/App'
import { BrowserRouter } from 'react-router-dom'

function RouterComponent(props) {
	return(
		<BrowserRouter>
			<App />
		</BrowserRouter>
	)
}

export default RouterComponent