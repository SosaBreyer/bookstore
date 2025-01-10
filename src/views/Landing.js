import React from 'react';
import {Link} from "react-router-dom";
import useRedirection from "../hooks/useRedirection";

function Landing() {
    //useRedirection("/books", 5000);

    return (
        <main className="landing-container p-3 text-center">
            <h1>Welcome to Tiny Book Store</h1>
            <p>Tiny Book Store is your favorite virtual bookstore. Find a wide variety of books for all tastes and ages. Explore our catalog and discover your next read!</p>
            <p>
                <Link to={"/books"} className="btn btn-lg btn-warning fw-bold border-black">
                    Explore Books
                </Link>
            </p>
        </main>
    );
}

export default Landing;