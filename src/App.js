import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Navbar from './components/navbar/NavbarGuest'
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="wrapper">
          <Navbar />
          <div className="navbarIcon">
            <a onClick={this.showSidebar}>&#9776;</a>
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
