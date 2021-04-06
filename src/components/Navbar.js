import React from "react";
import { NavLink, withRouter } from "react-router-dom";
function Navbar() {
    return (
        <div className="navbar">
            <NavLink
                className='navbar-item'
                to="/"
                exact
            >
                About Me
            </NavLink>
            <NavLink
                className='navbar-item'
                to="/town"
                exact
            >
                My Town
            </NavLink>
        </div>
    );
}

export default withRouter(Navbar);