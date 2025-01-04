import React, {useContext, useState} from 'react';
import Cart from "../components/Cart";
import {CartContext} from "../context/CartContext";

function Checkout() {
    const { cartItems, setCartItems } = useContext(CartContext);
    const [show, setShow] = useState('');

    const handleClose = () => setShow('');
    const handleShow = () => setShow('show');

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form?.addEventListener('submit', event => {
            event.preventDefault();
            event.stopPropagation();

            if (form.checkValidity()) {
                handleShow();
                setCartItems([]);
            }

            form.classList.add('was-validated')
        }, false)
    });

    return (
        <main>
            <div className="py-5 text-center">
                <h2>Checkout</h2>
            </div>

            <div className="row g-5">
                <div className="col-md-5 col-lg-4 order-md-last">
                    <Cart></Cart>
                </div>
                <div className="col-md-7 col-lg-8">
                    <h4 className="mb-3">Billing address</h4>
                    <form className="needs-validation" noValidate>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label htmlFor="firstName" className="form-label">First name</label>
                                <input type="text" className="form-control" id="firstName" required/>
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label htmlFor="lastName" className="form-label">Last name</label>
                                <input type="text" className="form-control" id="lastName" required/>
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" className="form-control" id="address" placeholder="1234 Main St"
                                       required/>
                                <div className="invalid-feedback">
                                    Please enter your shipping address.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="address2" className="form-label">
                                    Address 2 <span className="text-body-secondary">(Optional)</span>
                                </label>
                                <input type="text" className="form-control" id="address2"
                                       placeholder="Apartment or suite"/>
                            </div>

                            <div className="col-md-5">
                                <label htmlFor="country" className="form-label">Country</label>
                                <select className="form-select" id="country" required>
                                    <option value="">Choose...</option>
                                    <option>United States</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please select a valid country.
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="state" className="form-label">State</label>
                                <select className="form-select" id="state" required>
                                    <option value="">Choose...</option>
                                    <option>California</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please provide a valid state.
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label htmlFor="zip" className="form-label">Zip</label>
                                <input type="text" className="form-control" id="zip" placeholder="" required/>
                                <div className="invalid-feedback">
                                    Zip code required.
                                </div>
                            </div>
                        </div>

                        <hr className="my-4"/>

                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="same-address"/>
                            <label className="form-check-label" htmlFor="same-address">
                                Shipping address is the same as my billing address
                            </label>
                        </div>

                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="save-info"/>
                            <label className="form-check-label" htmlFor="save-info">Save this information for next
                                time</label>
                        </div>

                        <hr className="my-4"/>

                        <h4 className="mb-3">Payment</h4>

                        <div className="my-3">
                            <div className="form-check">
                                <input id="credit" name="paymentMethod" type="radio" className="form-check-input"
                                       required/>
                                <label className="form-check-label" htmlFor="credit">Credit card</label>
                            </div>
                            <div className="form-check">
                                <input id="debit" name="paymentMethod" type="radio" className="form-check-input"
                                       required/>
                                <label className="form-check-label" htmlFor="debit">Debit card</label>
                            </div>
                            <div className="form-check">
                                <input id="paypal" name="paymentMethod" type="radio" className="form-check-input"
                                       required/>
                                <label className="form-check-label" htmlFor="paypal">PayPal</label>
                            </div>
                        </div>

                        <div className="row gy-3">
                            <div className="col-md-6">
                                <label htmlFor="cc-name" className="form-label">Name on card</label>
                                <input type="text" className="form-control" id="cc-name" placeholder="" required/>
                                <small className="text-body-secondary">Full name as displayed on card</small>
                                <div className="invalid-feedback">
                                    Name on card is required
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="cc-number" className="form-label">Credit card number</label>
                                <input type="text" className="form-control" id="cc-number" placeholder="" required/>
                                <div className="invalid-feedback">
                                    Credit card number is required
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                                <input type="text" className="form-control" id="cc-expiration" placeholder=""
                                       required/>
                                <div className="invalid-feedback">
                                    Expiration date required
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label htmlFor="cc-cvv" className="form-label">CVV</label>
                                <input type="text" className="form-control" id="cc-cvv" placeholder="" required/>
                                <div className="invalid-feedback">
                                    Security code required
                                </div>
                            </div>
                        </div>

                        <hr className="my-4"/>

                        <button id="submit" className="w-100 btn btn-primary btn-lg" type="submit">Buy now</button>
                    </form>
                </div>
            </div>

            <div id="confirmationModal" className={`modal fade ${show}`} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content rounded-4 shadow">
                <div className="modal-body p-5">
                    <h2 className="fw-bold mb-0">Tiny Book Store</h2>

                    <ul className="d-grid gap-4 my-5 list-unstyled small">
                        <li className="d-flex gap-4">
                            <i className="bi bi-bag-heart-fill"></i>
                            <div>
                                <h5 className="mb-0">Thank you!</h5>
                                We’ve received your order. We’ll send you an email when it ships.
                            </div>
                        </li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-primary mt-5 w-100"
                            onClick={handleClose}>Great, thanks!
                    </button>
                </div>
            </div>
        </div>
    </div>
        </main>
    );
}

export default Checkout;
