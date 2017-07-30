import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/app/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import RouterComponent from './containers/config/RouterComponent'

ReactDOM.render(<RouterComponent />, document.getElementById('root'));
registerServiceWorker();
