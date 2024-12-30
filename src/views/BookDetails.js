import React, {useContext} from "react";
import {useParams} from "react-router";
import {BookContext} from "../context/BookContext";
import {CartContext} from "../context/CartContext";
import Cart from "../components/Cart";

const BookDetails = () => {
    const { bookId } = useParams();
    const { books } = useContext(BookContext);
    const { cartItems, setCartItems } = useContext(CartContext);
    const bookDetail = books.find(book => book.id === bookId);

    if (!bookDetail) {
        return <main><h2>Libro no encontrado</h2></main>;
    }

    const addToCart = (book) => {
        let items = [...cartItems];
        let index = items.findIndex(item => item.id === book.id);
        if (index !== -1) {
            items[index].amount = items[index].amount +1;
        } else {
            book['amount'] = 1;
            items.push(book);
        }

        setCartItems(items);
    }

    return (
        <main>
            <div className="row">
                <div className="col-md-5 col-lg-4 order-md-last">
                    <Cart></Cart>
                </div>
                <div className="col-md-7 col-lg-8">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <h3 className="mb-0">{bookDetail.title}</h3>
                            <div
                                className="mb-1 text-body-secondary">{bookDetail.author} | {bookDetail.genre} | {bookDetail.price}</div>
                            <p className="card-text mb-auto">{bookDetail.synopsis}</p>
                            <button type="button" className="btn btn-primary" onClick={() => addToCart(bookDetail)}>Add to cart</button>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <img src={bookDetail.cover} alt={bookDetail.title}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default BookDetails;