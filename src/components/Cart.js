import React, {useContext, useEffect, useState} from "react";
import {CartContext} from "../context/CartContext";
import {Quantifier} from "./Quantifier";

const Cart = () => {
    const { cartItems } = useContext(CartContext);
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(cartItems)
    }, [cartItems]);

    return (
        <>
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">
                    <i className="bi bi-cart4"></i> Your cart
                </span>
                <span className="badge bg-primary rounded-pill">{items.length}</span>
            </h4>
            <ul className="list-group mb-3">
                {
                    items.length > 0 ? (
                        items.map((item, index) => (
                            <li key={index} className="list-group-item d-flex align-items-center lh-sm">
                                <Quantifier id={item.id} amount={item.amount}></Quantifier>
                                <div className="text-start flex-grow-1 me-3">
                                    <h6 className="my-0">{item.title.trim()}</h6>
                                    <small className="text-body-secondary">{item.author.trim()}</small>
                                </div>
                                <span className="text-body-secondary">{item.price}€</span>
                            </li>
                        ))
                    ) : (
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 className="my-0">No items</h6>
                            </div>
                            <span className="text-body-secondary"></span>
                        </li>
                    )
                }

                <li className="list-group-item d-flex justify-content-between">
                    <span>Total (EUR)</span>
                    <strong>
                        {
                            items.reduce((sum, item) => {
                                const price = item.price;
                                return sum + price;
                            }, 0)
                        }€
                    </strong>
                </li>
            </ul>
        </>
    );
}

export default Cart;