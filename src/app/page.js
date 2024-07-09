'use client';
import { useEffect, useState } from 'react'
import styles from './page.module.scss'
import Landing from '../components/landing';
import Description from '../components/description';
import Projects from '../components/projects';
import Footer from '../components/footer';

export default function Home() {
    const [locomotiveScroll, setLocomotiveScroll] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            (async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default;
                const scroll = new LocomotiveScroll({
                    el: document.querySelector('[data-scroll-container]'),
                    smooth: true,
                    smoothMobile: false,
                    resetNativeScroll: true
                });
                setLocomotiveScroll(scroll);
            })();
        }

        return () => {
            if (locomotiveScroll) {
                locomotiveScroll.destroy();
            }
        }
    }, []);

    return (
        <main className={styles.main} data-scroll-container>
            <Landing />
            <Description />
            <Projects />
            <Footer />
        </main>
    )
}