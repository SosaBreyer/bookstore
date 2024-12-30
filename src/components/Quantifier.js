import React, {useContext} from "react";
import {CartContext} from "../context/CartContext";

export const Quantifier = ({id, amount}) => {
    const { cartItems, setCartItems } = useContext(CartContext);

    let leftButtonClass = amount <= 1 ? 'btn-danger' : 'btn-secondary';
    let leftButtonIcon = amount <= 1 ? 'bi-trash' : 'bi-dash-lg';

    const reduce = (bookId, bookAmount) => {
        if (bookAmount <= 1) {
            // remove from cart
            let filtered = cartItems.filter(item => item.id !== bookId);
            setCartItems(filtered);
        } else {
            // reduce amount
            let reduced = cartItems.map((item) => {
                if (item.id === bookId) {
                    item.amount = bookAmount-1;
                }

                return item;
            });

            setCartItems(reduced);
        }
    }

    const increase = (bookId, bookAmount) => {
        let increased = cartItems.map((item) => {
            if (item.id === bookId) {
                item.amount = bookAmount+1;
            }

            return item;
        });

        setCartItems(increased);
    }

    return (
        <div className="btn-group me-3">
            <button type="button" className={`btn ${leftButtonClass}`} onClick={() => reduce(id,amount)}>
                <i className={`bi ${leftButtonIcon}`}></i>
            </button>
            <input type="text" value={amount} className="cart-input" disabled/>
            <button type="button" className="btn btn-secondary" onClick={() => increase(id, amount)}>
                <i className="bi bi-plus-lg"></i>
            </button>
        </div>
    );
}