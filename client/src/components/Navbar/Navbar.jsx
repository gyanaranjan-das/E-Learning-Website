import React from "react";
import './Navbar.css';

const Navbar = ()=>{
    return (
        <nav className="navbar">
            <div className="navbar-brand">LMS Platform</div>
            <div className="navbar-links">
                <a href="/">Home</a>
                <a href="/courses">Courses</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    )
}

export default Navbar;