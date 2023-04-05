import React, { Component } from 'react';
const Navbar = ({totalCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="test">
                Total counter in use
                <span className="badge badge-pill badge-secondary mx-2">{totalCounters}</span>
            </a>
        </nav>
    );
}
 
export default Navbar;