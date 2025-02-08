import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/">
            </Link>
            <div className="ml-auto">
                {location.pathname === '/' && (
                    <Link to="/demo">
                        <button className="btn btn-success">Add new contact</button>
                    </Link>
                )}
            </div>
        </nav>
    );
};
