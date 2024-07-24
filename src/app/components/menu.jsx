"use client";
import styles from "@/app/css/menu.module.scss";
import { useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ShoppingBag from "./shopping-bag";
import GSAPAnimation from "./Text-reveal-animation";
import { useShoppingBag } from "@/app/components/shopping_bag_context";

export default function Menu({
    primary,
    secondary
}) {
    const { bagCount } = useShoppingBag();
    const [isOpen, setIsOpen] = useState(false);
    const [isShoppingBagOpen, setShoppingBagOpen] = useState(false);

    const handleShoppingBagClick = () => {
        setShoppingBagOpen(!isShoppingBagOpen);
    };

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

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
        <>
            <header className={styles.menu_header} style={{ '--desktop-item-primary': primary, '--desktop-item-secondary': secondary }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="62" className={`fullsize ${styles.menu_anim} ${styles.front}`} preserveAspectRatio="xMidYMid meet">
                    <defs>
                        <clipPath id="theClipPath">
                            <rect className="moveMe" width="100%" style={{ fill: secondary }} y="0%" x="0"></rect>
                        </clipPath>
                    </defs>
                    <rect className={`moveMe ${styles.rect_background}`} width="100%" style={{ fill: primary }} y="0%" x="0"></rect>
                    <Link rel="stylesheet" href="/">
                        <text className={styles.logo} x="30" y="40" fontSize="25" style={{ fill: primary }}>NILA-C</text>
                    </Link>

                    <g clipPath="url(#theClipPath)" width="100%">
                        <Link rel="stylesheet" href="/">
                            <text className={styles.logo_overlay} x="30" y="40" fontSize="25" style={{ fill: secondary }}>NILA-C</text>
                        </Link>

                    </g>
                    <text
                        className={styles.menu_icon}
                        onClick={() => toggleOpen()}
                        x="100%"
                        dx="-30"
                        y="35"
                        textAnchor="end"
                        fontSize="15"
                        style={{ fill: primary }}
                    >
                        MENU
                    </text>

                    <svg className={styles.cart_icon} onClick={handleShoppingBagClick} xmlns="http://www.w3.org/2000/svg" x="150px" y="15" height="25" width="25" viewBox="0 0 448 512">
                        <path fill={primary} d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
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
                            style={{ fill: secondary}}
                        >
                            CLOSE
                        </text>
                        <svg className={styles.cart_overlay} onClick={handleShoppingBagClick} xmlns="http://www.w3.org/2000/svg" x="150px" y="15" height="25" width="25" viewBox="0 0 448 512">
                            <path fill={secondary} d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                        </svg>
                    </g>
                </svg>

                {bagCount >= 0 && (
                    <span className={styles.bag_count} style={{ color: primary }}>
                        ( {bagCount} )
                    </span>
                )}

                {isShoppingBagOpen && <ShoppingBag />}
                <div className={`${styles.items_container} ${isOpen ? styles.animate_menu : styles.animate_menu_up}`}>
                    <ul className={styles.items}>
                        <GSAPAnimation targetSelector=".item-text" />
                        <Link className={styles.link} href='/pages/shop'><li className={`${styles.item} item-text`} style={{ color: secondary }}>SHOP</li></Link>
                        <Link href='/pages/lookbook'><li className={`${styles.item} item-text`} style={{ color: secondary }}>LOOKBOOK</li></Link>
                        <Link href='/pages/about'><li className={`${styles.item} item-text`} style={{ color: secondary }}>ABOUT</li></Link>
                        <Link href='/pages/contact'><li className={`${styles.item} item-text`} style={{ color: secondary }}>CONTACT</li></Link>
                    </ul>
                </div>
            </header>
            <div className={styles.desktop_menu_container} style={{ '--desktop-item-primary': primary }}>
                <div className={styles.desktop_menu_container} style={{ '--desktop-item-secondary': secondary }}>
                    <ul className={styles.menu_items_desktop}>
                        <Link href='/pages/shop' className={styles.link}>
                            <li className={styles.item_desktop} style={{ color: primary }}>
                                <span className={styles.item_text}>SHOP</span>
                                <span className={styles.overlay}>SHOP</span>
                            </li>
                        </Link>
                        <Link href='/pages/lookbook' className={styles.link}>
                            <li className={styles.item_desktop} style={{ color: primary }}>
                                <span className={styles.item_text}>LOOKBOOK</span>
                                <span className={styles.overlay}>LOOKBOOK</span>
                            </li>
                        </Link>
                        <Link href='/pages/about' className={styles.link}>
                            <li className={styles.item_desktop} style={{ color: primary }}>
                                <span className={styles.item_text}>ABOUT</span>
                                <span className={styles.overlay}>ABOUT</span>
                            </li>
                        </Link>
                        <Link href='/pages/contact' className={styles.link}>
                            <li className={styles.item_desktop} style={{ color: primary }}>
                                <span className={styles.item_text}>CONTACT</span>
                                <span className={styles.overlay}>CONTACT</span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    );
}
