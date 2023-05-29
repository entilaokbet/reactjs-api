import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
    return (
        <>
            <div className="container">
                <div className="navFilter">

                    <NavLink to="/" style={({ isActive }) => ({
                        color: isActive ? '#04AA6D' : '#5c5c5c'
                    })}>
                        Schedule and Projection
                    </NavLink>

                    {/* <NavLink to="/schedule" style={({ isActive }) => ({
                        color: isActive ? '#04AA6D' : '#5c5c5c'
                    })}>
                        Schedule and Projection
                    </NavLink> */}

                    <NavLink to="/history" style={({ isActive }) => ({
                        color: isActive ? '#04AA6D' : '#5c5c5c'
                    })}>
                        History
                    </NavLink>

                </div>
            </div>
        </>
    )
}

export default NavLinks;