import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import classes from "./Navigation.module.css"

type Props = {}

const Navbar = (props: Props) => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    const navHandler = () => {
        setIsNavExpanded(!isNavExpanded)
    }

    const linkHandler = () => {
        setIsNavExpanded(false);
    };

    return (
        <nav className={classes.navigation}>
            <a href="/" className={classes.brandName}>
                stumeet
            </a>
            <button className={classes.hamburger} onClick={navHandler}>
                {/* icon from heroicons.com */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            <div
                className={isNavExpanded ? [classes.navigationMenu, classes.expanded].join(' ') : classes.navigationMenu}>
                <ul>
                    <li>
                        <Link to="/" onClick={linkHandler}>View current events</Link>
                    </li>
                    <li>
                        <Link to="/newEvent" onClick={linkHandler}>Add new event</Link>
                    </li>
                    <li>
                        <Link to="/markedEvents" onClick={linkHandler}>Marked Events</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar