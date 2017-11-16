import React, { Component } from 'react'
import './Dashboard.css'
import Preview from '../../components/preview/Preview'

const projects = [
    {
        id: 1,
        name: 'Project1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        id: 2,
        name: 'Project2',
        description: 'This is the second project.'
    },
    {
        id: 3,
        name: 'Project3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse voluptatem corporis commodi rerum'
    },
    {
        id: 4,
        name: 'Project4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sed minus eos aliquid obcaecati ullam quia expedita fugiat! Soluta dolorem rerum harum odit ipsam',
    },
    {
        id: 5,
        name: 'Project5',
        description: 'This is the fifth project.'
    },
    {
        id: 6,
        name: 'Project6',
        description: 'Lorem ipsum dolor sit amet'
    },
]

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <div className="projects">
                    {
                        projects.map((project, i) => (
                            <Preview project={project} key={i} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Dashboard