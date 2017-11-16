import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Preview.css'

class Preview extends Component {
    sliceDescription(description) {
        let dots = description.length >= 100 ? "..." : ""
        return description.slice(0, 100) + dots
    }

    render() {
        const { project } = this.props

        return (
            <div className="preview">
                <div className="name">
                    <Link className="link" to={'/project/details/' + project.id}>{project.name}</Link>
                </div>
                <div className="description">
                    {this.sliceDescription(project.description)}
                </div>
            </div>
        )
    }
}

export default Preview