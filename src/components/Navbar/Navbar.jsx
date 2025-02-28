import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"

function Navbar() {
    return (
        <div className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/mailboxes">Mailboxes</NavLink>
            <NavLink to="/new-mailbox">New Mailbox</NavLink>
        </div>
    )
}

export default Navbar