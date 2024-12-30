import React from "react";
import {Footer} from "./components/Footer";
import Router from "./routes/Router";
import {BookContext} from "./context/BookContext";
import {CartContext} from "./context/CartContext";
import {useBooks} from "./hooks/useBooks";
import {useLocalStorage} from "./hooks/useLocalStorage";

function App() {
    const books = useBooks();
    const [cartItems, setCartItems] = useLocalStorage();

    return (
        <BookContext.Provider value={{books}}>
            <CartContext.Provider value={{cartItems, setCartItems}}>
                <div className="App container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <Router></Router>
                    <Footer/>
                </div>
            </CartContext.Provider>
        </BookContext.Provider>
    );
}

export default App;
