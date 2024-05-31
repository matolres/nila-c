"use client"
import styles from "@/app/css/menu.module.scss";
import { useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ShoppingBag from "./shopping-bag";
import GSAPAnimation from "./Text-reveal-animation";

export default function Menu({
    menuIconColor,
    closingMenuIconColor,
    moveMeColor,
    rectColor,
    logoColor,
    logoOverlayColor,
    lineColor,
    lineOverlayColor,
    cartIconColor,
    cartOverlayColor,
    itemTextColor
}) {
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

<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="62" className={`fullsize ${styles.menu_anim} ${styles.front}`} preserveAspectRatio="xMidYMid meet">
  <defs>
    <clipPath id="theClipPath">
      <rect className="moveMe" width="100%" style={{ fill: moveMeColor }} y="0%" x="0"></rect>
    </clipPath>
  </defs>
  <rect className={`moveMe ${styles.rect_background}`} width="100%" style={{ fill: rectColor }} y="0%" x="0"></rect>
  <Link rel="stylesheet" href="/">
    <text className={styles.logo} x="30" y="40" fontSize="25" style={{ fill: logoColor }}>NILA-C</text>
  </Link>
  <line className={styles.line} x1="0" y1="60" x2="100%" y2="60" style={{ stroke: lineColor }} strokeWidth="2" />
  <g clipPath="url(#theClipPath)" width="100%">
    <Link rel="stylesheet" href="/">
      <text className={styles.logo_overlay} x="30" y="40" fontSize="25" style={{ fill: logoOverlayColor }}>NILA-C</text>
    </Link>
    <line className={styles.line_overlay} x1="0" y1="60" x2="100%" y2="60" style={{ stroke: lineOverlayColor }} strokeWidth="2" />
  </g>
  <text
    className={styles.menu_icon}
    onClick={() => toggleOpen()}
    x="100%"
    dx="-30"
    y="35"
    textAnchor="end"
    fontSize="15"
    style={{ fill: menuIconColor }}
  >
    MENU
  </text>
  <svg className={styles.cart_icon} onClick={handleShoppingBagClick} xmlns="http://www.w3.org/2000/svg" x="150px" y="12" height="30" width="30" viewBox="0 0 576 512">
    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" fill={cartIconColor} />
  </svg>
  <g clipPath="url(#theClipPath)">
    <text
      className={styles.closing_menu_icon}
      onClick={() => toggleOpen()}
      x="100%"
      dx="-30"
      y="35"
      textAnchor="end"
      fontSize="15"
      style={{ fill: closingMenuIconColor }}
    >
      CLOSE
    </text>
    <svg className={styles.cart_overlay} onClick={handleShoppingBagClick} xmlns="http://www.w3.org/2000/svg" x="150px" y="12" height="30" width="30" viewBox="0 0 576 512">
      <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" fill={cartOverlayColor} />
    </svg>
  </g>
</svg>

{isShoppingBagOpen && <ShoppingBag />}
<div className={`${styles.items_container} ${isOpen ? styles.animate_menu : styles.animate_menu_up}`}>

                <ul className={styles.items} >
                <GSAPAnimation targetSelector=".item-text" />
                    <Link href='/pages/shop'><li className={`${styles.item} item-text`} style={{ color: itemTextColor }}>SHOP</li></Link>
                    <Link href='/pages/lookbook'><li className={`${styles.item} item-text`} style={{ color: itemTextColor }}>LOOKBOOK</li></Link>
                    <Link href='/pages/about'><li className={`${styles.item} item-text`} style={{ color: itemTextColor }}>ABOUT</li></Link>
                    <Link href='/pages/contact'><li className={`${styles.item} item-text`} style={{ color: itemTextColor }}>CONTACT</li></Link>
                </ul>
                </div>
</header>


    );
}

