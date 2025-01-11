import React from 'react';
import {Link} from "react-router-dom";

function Header () {
    return (
        <header>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <Link to={"/books"} className="navbar-brand">
                        <img className="me-1" src="/favicon-32x32.png" alt="Tiny Book Store logo" width="20" height="20"/>
                        Tiny Book Store
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
