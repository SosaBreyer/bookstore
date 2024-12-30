import {useEffect, useState} from "react";

let key = 'bookShopCartItems';

function getStorageValue() {
    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved);
    return initial || [];
}

export const useLocalStorage = () => {
    const [value, setValue] = useState(() => {
        return getStorageValue();
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
};
