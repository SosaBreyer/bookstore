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
        <main>
            <div className="row">
                <div className="col">
                    <section className="py-5 text-center container">
                        <div className="row py-lg-5">
                            <div className="col-lg-6 col-md-8 mx-auto">
                                <h1 className="fw-light">Album example</h1>
                                <p className="lead text-body-secondary">
                                    Something short and leading about the collection
                                    below—its contents, the creator, etc. Make it short and sweet, but not too short so
                                    folks
                                    don’t simply skip over it entirely.
                                </p>
                                <input type="search"
                                       name="search"
                                       value={searchItem}
                                       onChange={handleInputChange}
                                       placeholder="Buscar por título"
                                />
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
                            <div className="row row-cols-1 row-cols-md-3 mb-3 g-3">
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
