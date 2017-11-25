import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Navbar from './components/navbar/NavbarGuest'

import Dashboard from './pages/dashboard/Dashboard'
import Landing from './pages/landing/Landing'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="wrapper">
          <div className="navbarIcon">
            <a onClick={this.showSidebar}>&#9776;</a>
          </div>

          <Navbar />

          <div className="content">
            <Route exact path='/' component={Landing} />
            <Route exact path='/dashboard' component={Dashboard} />
          </div>

        </div>
      </Router>
    )
  }

  showSidebar() {
    let display = document.getElementById('navbar').style.display
    let map = {
      block: 'none',
      none: 'block',
      "": 'block'
    }
    document.getElementById('navbar').style.display = map[display]
  }

}

export default App;
