import React, { Component } from 'react';
import './Searchform.css';

class Searchform extends Component {

    render() {
        return (
            <div className="searchform">
                <form noValidate>
                    <ul className="form">
                        <li>
                            <p className="italic lightBold">Let´s jump right into it, shall we?</p>
                            <input type="text" name="searchfield" className="field-long" placeholder="Enter keywords and get started" />
                        </li>
                        <li>
                            <label>Scope</label>
                            <select name="scope" className="field-select">
                                <option value="any">Any</option>
                                <option value="softwareDevelopment">Software Development</option>
                                <option value="marketing">Marketing</option>
                                <option value="projectManagement">Project Management</option>
                                <option value="design">Design</option>
                            </select>
                        </li>
                        <li>
                            <input className="submit" type="submit" value="Here we go" />
                        </li>
                    </ul>
                </form>
            </div>
        )
    }

}

export default Searchform;
