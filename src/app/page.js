'use client';
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import Landing from '../components/Landing';
import { AnimatePresence } from 'framer-motion';

export default function Home() {

    useEffect( () => {

        (

            async () => {

                const LocomotiveScroll = (await import('locomotive-scroll')).default

                const locomotiveScroll = new LocomotiveScroll();

            }

        )()

    }, [])

    return (
        <main className={styles.main}>
            {/*<AnimatePresence mode='wait'>*/}
            {/*    {isLoading && <Preloader />}*/}
            {/*</AnimatePresence>*/}
            <Landing />
        </main>
    )
}