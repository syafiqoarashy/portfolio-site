import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
export default function index() {

    const opening = "Hey, I'm Fiqo 👋"
    const phrase = "Ambitious Student Driven by Growth, Collaboration, and Impact.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                    {
                        phrase.split(" ").map( (word, index) => {
                            return <span className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                        })
                    }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>Passionate about XR technology and interactive designs, I'm a third-year international computer science student at the University of Indonesia 🇮🇩. With expertise in UI/UX, 3D, graphic, game and interactive design, I thrive on overcoming challenges and bringing visionary ideas to life.</motion.p>
            </div>
        </div>
    )
}
