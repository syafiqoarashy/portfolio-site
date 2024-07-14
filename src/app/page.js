'use client';
import { useEffect, useState } from 'react'
import styles from './page.module.scss'
import Landing from '../components/landing';
import Description from '../components/description';
import Projects from '../components/projects';
import Footer from '../components/footer';
import {FloatingNav} from "@/components/ui/floating-navbar";

export default function Home() {
    const [locomotiveScroll, setLocomotiveScroll] = useState(null);

    useEffect(() => {
        // Locomotive Scroll initialization
        const initLocomotiveScroll = async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const scroll = new LocomotiveScroll({
                el: document.querySelector('[data-scroll-container]'),
                smooth: true,
                smoothMobile: false,
                resetNativeScroll: true
            });
            setLocomotiveScroll(scroll);
        };

        // Smooth scroll functionality
        const initSmoothScroll = () => {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });
        };

        // Run initializations
        initLocomotiveScroll();
        initSmoothScroll();

        // Cleanup
        return () => {
            if (locomotiveScroll) {
                locomotiveScroll.destroy();
            }
        };
    }, []);

    return (
        <>
            <FloatingNav />
            <main className={styles.main} data-scroll-container>
                <section id="landing">
                    <Landing />
                </section>
                <section id="description">
                    <Description />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="footer">
                    <Footer />
                </section>
            </main>
        </>
    )
}