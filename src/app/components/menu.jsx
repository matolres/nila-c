"use client"
import styles from "@/app/css/menu.module.css"
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Turn as Hamburger } from 'hamburger-react'
import gsap from "gsap";


export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);  // Create a ref for the menu

    const toggleOpen = () => {
        setIsOpen(!isOpen);  // Toggle the state
    }

    useEffect(() => {
        gsap.to(".moveMe", {
            duration: 0.5,
            x: -500,
            yoyo: true,
            
            ease: "sine.inOut"
        });
    }, []); // Run when isOpen changes

    return (
<svg xmlns="http://www.w3.org/2000/svg" width="2000" height="1000" viewBox="0 0 2000 1000">
    <defs>
        <clipPath id="theClipPath">
            <rect class="moveMe" width="100%" height="100%" fill="purple" x="400" y="0" >

            </rect>

        </clipPath>
    </defs>
    <rect class="moveMe" width="100%" height="100%" fill="yellow" x="400" y="0" >

    </rect>

    <text className={styles.logo} transform="translate(70 45)" text-anchor="middle" font-size="30" fill="yellow">NILA-C</text>
    <line x1="0" y1="70" x2="100%" y2="70" stroke="yellow" stroke-width="2" />
    <g clip-path="url(#theClipPath)">
        <text transform="translate(70 45)" text-anchor="middle" font-size="30" fill="blue">NILA-C</text>
        <line x1="0" y1="70" x2="100%" y2="70" stroke="blue" stroke-width="2" />
    </g>
</svg>

    );
}

/*
"use client"
import styles from "@/app/css/menu.module.css"
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Turn as Hamburger } from 'hamburger-react'
import gsap from "gsap";


export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);  // Create a ref for the menu

    const toggleOpen = () => {
        setIsOpen(!isOpen);  // Toggle the state
    }

    useEffect(() => {
        gsap.to(".moveMe", {
            duration: 2,
            x: 1600,
            yoyo: true,
            repeat: 1,
            ease: "sine.inOut"
        });
    }, []); // Run when isOpen changes

    return (
<svg xmlns="http://www.w3.org/2000/svg" width="2000" height="1000" viewBox="0 0 2000 1000">
    <defs>
        <clipPath id="theClipPath">
            <rect class="moveMe" width="100%" height="100%" fill="purple" x="0" y="0" />
        </clipPath>
    </defs>
    <rect class="moveMe" width="100%" height="100%" fill="yellow" x="0" y="0" />
    <text transform="translate(70 45)" text-anchor="middle" font-size="30" fill="yellow">HELLO</text>
    <g clip-path="url(#theClipPath)">
        <text transform="translate(70 45)" text-anchor="middle" font-size="30" fill="blue">HELLO</text>
    </g>
</svg>
    );
}
*/


/*
"use client"
import styles from "@/app/css/menu.module.css"
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Turn as Hamburger } from 'hamburger-react'
import gsap from "gsap";


export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);  // Create a ref for the menu

    const toggleOpen = () => {
        setIsOpen(!isOpen);  // Toggle the state
    }

    useEffect(() => {
        if (menuRef.current) {  // Check if the element is present
            if (isOpen) {
                // Animate in
                gsap.to(menuRef.current, {
                    duration: 0.5,
                    x: 0,  // From `translateX(100%)` to `translateX(0)`
                    ease: "sine.inOut"
                });
            } else {
                // Animate out
                gsap.to(menuRef.current, {
                    duration: 0.5,
                    x: '100%',  // Back off-screen
                    ease: "sine.inOut"
                });
            }
        }
    }, [isOpen]);  // Run when isOpen changes

    return (
        <>
        
        <nav className={styles.nav}>
            <button className={styles.toggle_button} onClick={toggleOpen}>
                <Hamburger className={styles.burger} color="yellow" duration={0.3} easing="ease-in" size={25} />
            </button>
            <div className={styles.logocontainer}>
                <h1 className={styles.logo} >Nila-C</h1>
            </div>
            <div ref={menuRef} className={styles.moveMe}>
                <ul className={styles.items}>
                    <Link href='/'><li className={styles.item}>SHOP</li></Link>
                    <Link href='/artists'><li className={styles.item}>LOOKBOOK</li></Link>
                    <Link href='/paystep'><li className={styles.item}>ABOUT</li></Link>
                    <Link href='/paystep'><li className={styles.item}>CONTACT</li></Link>
                </ul>
            </div>
        </nav>
        </>
    );
}

*/