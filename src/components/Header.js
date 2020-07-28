import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <p className="navbar-brand">Perpustakaan</p>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/add" className="nav-link">Add Buku</Link>
                    </li>
                </ul>
            </nav>

        )
    }
}
