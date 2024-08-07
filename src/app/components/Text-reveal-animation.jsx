"use client"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function GSAPAnimation({ targetSelector, additionalOptions }) {
    gsap.registerPlugin(useGSAP);
    useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const defaultAnimationOptions = {
      y: 155,
      
      stagger: 0.05,
      
      duration: 0.5
    };
    const animationOptions = { ...defaultAnimationOptions, ...additionalOptions };
    gsap.from(targetSelector, {
      ...animationOptions,
      scrollTrigger: {
        trigger: targetSelector,
        start: "top-=150 center",
        toggleActions: "play none none reverse",
     
        

        
      },
      ease: "power4.out"
    });
    gsap.context()
  });

 
}