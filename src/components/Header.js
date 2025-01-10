import React from 'react';
import {Link} from "react-router-dom";

function Header () {
    return (
        <header>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <Link to={"/books"} className="navbar-brand">Book Store</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
