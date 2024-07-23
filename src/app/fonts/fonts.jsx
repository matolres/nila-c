import { Oswald, Bebas_Neue, DM_Mono } from "next/font/google";

export const oswald = Oswald({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--oswald-font'
})
export const bebasNeue = Bebas_Neue({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--bebasNeue-font'
})
export const dmMono = DM_Mono({
    weight: ['400', '500'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--dmMono-font'
})