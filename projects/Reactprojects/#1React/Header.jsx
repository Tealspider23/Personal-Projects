//import React from 'react'
//import ReactDOM from 'react-dom'

import React from "react"

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="download.png" width="40px" />
                <ul className="nav-items">
                    <li>About</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}