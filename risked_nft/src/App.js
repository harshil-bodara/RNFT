import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import Home from './components/home/index'
import Routes from './components/routes/routes.js'

import { Provider } from 'react-redux'
import store from './store';

import "swiper/css/bundle";
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/fonts/index.css'
import './index.css'
import './assets/css/bootstrap-custom.css'
import './assets/css/responsive.css'
import './assets/css/menu.css'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={Routes} />
        </Switch>
      </Router>
    </Provider>
    
  );
}

export default App;

