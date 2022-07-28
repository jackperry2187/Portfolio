import React from 'react';
import { Link, useLocation } from "react-router-dom";

export const NavBar = () => {
    const location = useLocation();

    return (
        <header className="mb-auto border-bottom border-secondary border-1">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="mx-auto">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className={"nav-link h3" + (location.pathname === '/' ? ' active' : '')} to="/">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={"nav-link h3" + (location.pathname === '/experience' ? ' active' : '')} to="/experience">Experience</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={"nav-link h3" + (location.pathname === '/projects' ? ' active' : '')} to="/projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={"nav-link h3" + (location.pathname === '/classes' ? ' active' : '')} to="/classes">Classes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={"nav-link h3" + (location.pathname === '/resume' ? ' active' : '')} to="/resume">Resume</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}