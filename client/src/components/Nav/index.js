import React from "react";
import "./style.css";

function Nav() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Google Books</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Search</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/saved">Saved</a>
                        </li>
                        
                    </ul>
                    
                </div>
            </nav>
        );
}

export default Nav;