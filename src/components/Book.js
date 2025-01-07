import React from "react";
import {Link} from "react-router-dom";

export const Book = ({book}) => {
    return (
        <Link to={`/books/${book.id}`}>
            <div className="card h-100 mb-4 rounded-3 shadow-sm">
                <img src={book.cover} className="img-thumbnail" alt={book.title}/>
                <div className="card-body">
                    <h5 className="card-title text-warning"><b>{book.title}</b></h5>
                    <p className="card-text">
                        <small className="text-body-secondary">
                            {book.author} | {book.genre}
                        </small>
                    </p>
                </div>
                <div className="card-footer text-center">
                    <h3>{book.price}€</h3>
                </div>
            </div>
        </Link>
    );
}