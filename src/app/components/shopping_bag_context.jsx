"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';

const ShoppingBagContext = createContext();

export const ShoppingBagProvider = ({ children }) => {
    const [bag, setBag] = useState(() => {
        const savedBag = localStorage.getItem('shoppingBag');
        return savedBag ? JSON.parse(savedBag) : [];
    });

    // Use effect to check for expired items without including `bag` in the dependencies
    useEffect(() => {
        const interval = setInterval(() => {
            setBag(prevBag => {
                const now = Date.now();
                const filteredBag = prevBag.filter(item => now < item.expiry);
                if (filteredBag.length !== prevBag.length) {
                    localStorage.setItem('shoppingBag', JSON.stringify(filteredBag));
                    return filteredBag;
                }
                return prevBag; // Return previous bag if no items are expired to avoid unnecessary re-renders
            });
        }, 300000); // Check every 5 minutes

        return () => clearInterval(interval); // Cleanup the interval when the component unmounts
    }, []);

    const addToBag = (product) => {
        setBag(prevBag => {
            const updatedBag = [...prevBag, { product: product, timestamp: Date.now(), expiry: Date.now() + 15 * 60 * 1000 }];
            localStorage.setItem('shoppingBag', JSON.stringify(updatedBag));
            return updatedBag;
        });
    };

    const removeFromBag = (productId) => {
        setBag(prevBag => {
            const updatedBag = prevBag.filter(item => item.product.id !== productId);
            localStorage.setItem('shoppingBag', JSON.stringify(updatedBag));
            return updatedBag;
        });
    };

    return (
        <ShoppingBagContext.Provider value={{ bag, addToBag, removeFromBag }}>
            {children}
        </ShoppingBagContext.Provider>
    );
};

export const useShoppingBag = () => useContext(ShoppingBagContext);
