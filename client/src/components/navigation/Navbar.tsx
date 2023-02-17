import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import classes from "./Navigation.module.css"

type Props = {}

const Navbar = (props: Props) => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    const navHandler = () => {
        setIsNavExpanded(!isNavExpanded)
    }

    return (
        <nav className={classes.navigation}>
            <a href="/" className={classes.brandName}>
                stumeet
            </a>
            <button className={classes.hamburger} onClick={navHandler}>
                {/* icon from heroicons.com */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div
                className={isNavExpanded ? [classes.navigationMenu, classes.expanded].join(' ')  : classes.navigationMenu }>
                <ul>
                    <li>
                        <Link to="/">View current events</Link>
                    </li>
                    <li>
                        <Link to="/newEvent">Add new event</Link>
                    </li>
                    <li>
                        <Link to="/participatingEvents">Selected events</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar