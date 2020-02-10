import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <h1>404</h1>
                <p>Oops, Page Not Found </p>
                <Link to='/' >
                    <p backgroundcolor='#313646' color='#fff' >Return to Home</p>
                </Link>
            </div>
        )
    }
}