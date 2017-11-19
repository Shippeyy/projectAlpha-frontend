import React, { Component } from 'react'
import './Landing.css'

import Searchform from '../../components/searchform/Searchform'

class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <div className="intro">
                    <p className="heading">Are you ready to find <a className="bold">your</a> project?</p>
                </div>

                <Searchform />

                <br/>

                <div className="login">
                    <form noValidate>
                        <ul className="form">
                            <li>
                                <label>Email <span className="required">*</span></label>
                                <input type="email" name="email" className="field-long" placeholder="your@email.com" />
                            </li>
                            <li>
                                <label>Password<span className="required">*</span></label>
                                <input type="password" name="passwordLogin" className="field-long" placeholder="Enter your very secure password here"/>
                            </li>
                            <li>
                                <input className="submit" type="submit" value="Login" />
                            </li>
                        </ul>
                    </form>
                </div>

                <div className="divider">&nbsp;</div>

                <div className="gap">&nbsp;</div>

                <div className="register">
                    <form noValidate>
                        <ul className="form">
                            <li><label>Full Name<span className="required">*</span></label><input type="text" name="firstname" className="field-divided" placeholder="First" />&nbsp;<input type="text" name="lastname" className="field-divided" placeholder="Last" /></li>
                            <li>
                                <label>Email <span className="required">*</span></label>
                                <input type="email" name="email" className="field-long" placeholder="your@email.com"/>
                            </li>
                            <li>
                                <label>Password<span className="required">*</span></label>
                                <input type="password" name="password1" className="field-long" placeholder="Enter your very secure password here" />
                            </li>
                            <li>
                                <label>Retype Password<span className="required">*</span></label>
                                <input type="password" name="password2" className="field-long" placeholder="Confirm your very secure password here"/>
                            </li>
                            <li>
                                <label>Expertise</label>
                                <select name="expertise" className="field-select">
                                    <option value="others">Others</option>
                                    <option value="softwareDevelopment">Software Development</option>
                                    <option value="marketing">Marketing</option>
                                    <option value="projectManagement">Project Management</option>
                                    <option value="design">Design</option>
                                </select>
                            </li>
                            <li>
                                <label>Personal Description</label>
                                <textarea name="personaldescription" id="personaldescription" className="field-long field-textarea"></textarea>
                            </li>
                            <li>
                                <input className="submit" type="submit" value="Register" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
}

export default Landing