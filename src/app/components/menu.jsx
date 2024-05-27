"use client"
import styles from "@/app/css/menu.module.scss";
import { useState} from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ShoppingBag from "./shopping-bag";



export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const [isShoppingBagOpen, setShoppingBagOpen] = useState(false);

    const handleShoppingBagClick = () => {
      setShoppingBagOpen(!isShoppingBagOpen);
    };


    const toggleOpen = () => {
        setIsOpen(!isOpen); 
    }


    useGSAP(() => {

        if (document.querySelector(".fullsize")) {
            if (isOpen) {
                gsap.from(".item-text", {
                    y: 150,
                    stagger: 0.05,
                    delay: 0.6,
                    duration: 0.3,
                    ease: "circ.out",
                });
                gsap.to(".item-text", {
                    y: 10,
                    stagger: 0.05,
                    delay: 0.7,
                    duration: 0.2,
                    ease: "circ.out",
                });

                gsap.to(".moveMe", {
                    duration: 0.3,
                    height: "100vh",
                    ease: "sine.inOut",
                });

                gsap.to(".fullsize", {
                    duration: 0.3,
                    height: "100vh",
                    ease: "sine.inOut",
                });
            } else {
                gsap.from(".item-text", {
                    y: 10,
                    stagger: 0.05,
                    delay: 0.2,
                    duration: 0.6,
                    ease: "circ.out",
                });
                gsap.to(".item-text", {
                    y: 120,
                    stagger: 0.05,
                    delay: 0.2,
                    duration: 0.6,
                    ease: "circ.out",
                });

                gsap.to(".moveMe", {
                    delay: 0.5,
                    duration: 0.3,
                    height: "0",
                    ease: "sine.inOut",
                });
                gsap.to(".fullsize", {
                    delay: 0.5,
                    duration: 0.3,
                    height: "62",
                    ease: "sine.inOut",
                });
            }
        }

}, [isOpen]);

    return (
        <header className={styles.menu_header}>

        
  
<svg  xmlns="http://www.w3.org/2000/svg" width="100%" height="62"  className={`fullsize ${styles.menu_anim} ${styles.front}`}  preserveAspectRatio="xMidYMid meet">
    
    <defs>
        <clipPath id="theClipPath">
            <rect className="moveMe" width="100%"  fill="purple" y="0%" x="0" >

            </rect>

        </clipPath>
    </defs>
    <rect className="moveMe" width="100%"  fill="yellow" y="0%" x="0" >
    </rect>

    <Link rel="stylesheet" href="/"><text className={styles.logo} transform="translate(45 40)" textAnchor="middle" fontSize="25" fill="yellow">NILA-C</text></Link>
    <line x1="0" y1="60" x2="100%" y2="60" stroke="yellow" strokeWidth="2" />
    <g clipPath="url(#theClipPath)" width="100%">
        
        <Link rel="stylesheet" href="/"><text className={styles.logo_overlay} transform="translate(45 40)" textAnchor="middle" fontSize="25" fill="blue">NILA-C</text></Link>
        <line x1="0" y1="60" x2="100%" y2="60" stroke="blue" strokeWidth="2" />
    </g>

    <text className={styles.menu_icon} onClick={() => { toggleOpen(); }} x="90%" y="35" textAnchor="middle" fontSize="15" fill="yellow" >MENU</text>
    <svg className={styles.cart_icon} onClick={handleShoppingBagClick} xmlns="http://www.w3.org/2000/svg" x="70%" y="12" height="30" width="30"  viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
    <g clipPath="url(#theClipPath)">
        <text onClick={() => { toggleOpen(); }} x="90%" y="35" textAnchor="middle" fontSize="15" fill="blue">CLOSE</text>
        <svg className={styles.cart_overlay} onClick={handleShoppingBagClick} xmlns="http://www.w3.org/2000/svg" x="70%" y="12" height="30" width="30" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
    </g>

</svg>
{isShoppingBagOpen && <ShoppingBag />}
<div className={`${styles.items_container} ${isOpen ? styles.animate_menu : styles.animate_menu_up}`}>

                <ul className={styles.items} >
                    <Link href='/pages/shop'><li class="item-text" className={`${ styles.item} ${"item-text"}`}>SHOP</li></Link>
                    <Link href='/lookbook'><li class="item-text" className={`${styles.item} ${"item-text"}`}>LOOKBOOK</li></Link>
                    <Link href='/about'><li class="item-text" className={`${styles.item} ${"item-text"}`}>ABOUT</li></Link>
                    <Link href='/contact'><li class="item-text" className={`${styles.item} ${"item-text"}`}>CONTACT</li></Link>
                </ul>
                </div>
</header>


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