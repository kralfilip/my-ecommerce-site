// shoppingCartContext.tsx
import React, {createContext, useState, useContext, useEffect} from 'react';
import {ICartItem} from "../../utils/types";

interface ShoppingCartContextProps {
    isCartVisible: boolean;
    showCart: () => void;
    hideCart: () => void;
    toggleCart: () => void;
    cartItems: ICartItem[];
    addToCart: (product: ICartItem) => void;
    removeFromCart: (product: ICartItem) => void;
    removeAllFromCart: (product: ICartItem) => void;

}

const ShoppingCartContext = createContext<ShoppingCartContextProps>({
    isCartVisible: true,
    showCart: () => {},
    hideCart: () => {},
    toggleCart: () => {},
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
    removeAllFromCart: () => {}
});

export const useShoppingCart = () => useContext(ShoppingCartContext);

export const ShoppingCartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(false);

    const showCart = () => setIsCartVisible(true);
    const hideCart = () => setIsCartVisible(false);
    const toggleCart = () => setIsCartVisible(prev => !prev);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const itemExists = prevItems.find(item => item.id === product.id);
            if (itemExists) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (product) => {
        setCartItems((prevItems) => {
            return prevItems.reduce((updatedItems, item) => {
                if (item.id === product.id) {
                    if (item.quantity > 1) {
                        // Decrease quantity by 1
                        updatedItems.push({ ...item, quantity: item.quantity - 1 });
                    }
                    // If quantity is 1, do not add the item back (effectively removing it)
                } else {
                    removeFromCart(product)
                }
                return updatedItems;
            }, []);
        });
    };

    const removeAllFromCart = (product) => {
        setCartItems((prevItems) => {
            return prevItems.filter((item) => item.id !== product.id);
        });
    };

    useEffect(() => {
        console.log("Updated isCartVisible: " + isCartVisible);
    }, [isCartVisible]);
    return (
        <ShoppingCartContext.Provider value={{ isCartVisible, showCart, hideCart, toggleCart, cartItems, addToCart, removeFromCart, removeAllFromCart }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};
