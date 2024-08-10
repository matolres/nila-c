'use client'
import { createContext, useContext, useState } from 'react';

const PageColorContext = createContext();

export const PageColorProvider = ({ children }) => {
    const [colors, setColors] = useState({ text: 'defaultTextColor', background: 'defaultBackgroundColor' });

    return (
        <PageColorContext.Provider value={{ colors, setColors }}>
            {children}
        </PageColorContext.Provider>
    );
};

export const usePageColor = () => useContext(PageColorContext);
