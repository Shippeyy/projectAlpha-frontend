import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';

class App extends Component {

    render() {
        return (
            <div className="navbar" id="navbar">
                <ul>
                    <li><Link className="link" onClick={this.hideSideBar} to='/'>projectAlpha</Link></li>
                    <li><Link className="link" onClick={this.hideSideBar} to='/Dashboard'>Dashboard</Link></li>
                    <li><Link className="link" onClick={this.hideSideBar} to='/'>Sign in</Link></li>
                </ul>
            </div>
        );
    }

    hideSideBar() {
        let width = window.innerWidth / parseFloat(getComputedStyle(document.querySelector('body'))['font-size'])
        if (width <= 50) {
            document.getElementById('navbar').style.display = 'none'
        }
    }

    componentDidMount() {
        this.setSideBar(true)

        window.addEventListener('resize', () => {
            this.setSideBar()
        })
    }

    setSideBar(init) {
        let display = null
        let width = window.innerWidth / parseFloat(getComputedStyle(document.querySelector('body'))['font-size'])

        if (init) {
            if (width > 50) {
                this.changeSideBar('block')
            } else {
                this.changeSideBar('none')
            }
        }
        else {
            display = document.getElementById('navbar').style.display
            if (width > 50 && display === 'none') {
                this.changeSideBar('block')
            } else if (width <= 50 && display === 'block') {
                this.changeSideBar('none')
            }
        }

    }

    changeSideBar(mode) {
        document.getElementById('navbar').style.display = mode
    }
}

export default App;
