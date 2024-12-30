import React from 'react';
import {Link} from "react-router-dom";

function Header () {
    return (
        <header className="mb-auto">
            <div>
                <h3 className="float-md-start mb-0">Book Store</h3>
                <nav className="nav nav-masthead justify-content-center float-md-end">
                    <Link to={"/books"} className="nav-link fw-bold py-1 px-0">Home</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
