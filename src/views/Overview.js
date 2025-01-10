import React, {useContext, useEffect, useState} from 'react';
import {BookContext} from "../context/BookContext";
import {Book} from "../components/Book";
import Cart from "../components/Cart";


function Overview() {
    const {books} = useContext(BookContext);
    const [searchItem, setSearchItem] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm);

        const filteredItems = books.filter((book) =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredBooks(filteredItems);
    }

    useEffect(() => {
        setFilteredBooks(books)
    }, [books]);

    return (
        <main className="container p-3">
            <div className="row">
                <div className="col">
                    <section className="py-5 text-center container">
                        <div className="row py-lg-5">
                            <div className="col-lg-6 col-md-8 mx-auto">
                                <div className="input-group">
                                    <span className="input-group-text" id="search-icon">
                                        <i className="bi bi-search"></i>
                                    </span>
                                    <div className="form-floating">
                                        <input type="search" id="book-search" 
                                            className="form-control" placeholder="Search by title" 
                                            value={searchItem} onChange={handleInputChange}
                                        />
                                        <label htmlFor="book-search">Search by title</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5 col-lg-4 order-md-last">
                    <Cart></Cart>
                </div>
                <div className="col-md-7 col-lg-8">
                    <div className="album py-5 bg-body-tertiary">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 mb-3 g-3">
                                {
                                    filteredBooks.length > 0 ? (
                                        filteredBooks.map((book, index) => (
                                            <div key={index} className="col">
                                                <Book book={book}/>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="d-flex justify-content-center">
                                            <div className="spinner-border text-warning" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Overview;
