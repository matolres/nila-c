"use client"
// context/ThemeContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';


const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeClass, setThemeClass] = useState('home');
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return; // Ensure the router is ready before using it

    // Function to handle route changes
    const handleRouteChange = (url) => {
      if (!url) return;
      const pathParts = url.split('/');
      let page;
      if (pathParts.length === 2 && pathParts[1] === '') {
        page = 'home';
      } else {
        page = pathParts[2];
      }
      setThemeClass(page || 'home');
    };

    // Set initial theme
    handleRouteChange(router.pathname);

    // Listen for route changes
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      // Clean up event listener
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.isReady, router.pathname, router.events]);

  return (
    <ThemeContext.Provider value={themeClass}>
      <div className={themeClass}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);


/*
import themes from '@/app/css/themes'
*/