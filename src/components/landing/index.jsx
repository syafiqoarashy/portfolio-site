'use client';
import Image from 'next/image';
import styles from './style.module.scss';
import gsap from 'gsap';
import {useEffect, useRef} from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {FloatingNav} from "@/components/ui/floating-navbar";

export default function Home() {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;
    let direction = -1;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        requestAnimationFrame(animation);

        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                scrub: 0.25,
                onUpdate: e => direction = e.direction * -1
            },
            x: "-=300px",
        })
    }, []);

    const animation = () => {
        if (xPercent <= -100) {
            xPercent = 0;
        }
        if (xPercent > 0) {
            xPercent = -100;
        }
        gsap.set(firstText.current, {xPercent: xPercent});
        gsap.set(secondText.current, {xPercent: xPercent});
        xPercent += 0.1 * direction;
        requestAnimationFrame(animation);
    }

    return (
        <main className={styles.landing}>
            <Image
                fill={true}
                src={"/images/background.jpg"}
                alt={"image"}/>
            <div className={styles.sliderContainer}>
                <div ref={slider} className={styles.slider}>
                    <p ref={firstText}>🧑🏻‍💻Developer and 🧑🏻‍🎨Designer -</p>
                    <p ref={secondText}>🧑🏻‍💻Developer and 🧑🏻‍🎨Designer -</p>
                </div>
            </div>
        </main>
    )
}
