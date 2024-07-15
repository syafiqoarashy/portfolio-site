import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, fadeInSlideUp } from './animation';

export default function Index() {
    const opening = "Hey, I'm Fiqo 👋"
    const phrase = "Ambitious Student Driven by Growth, Collaboration, and Impact.";
    const description = useRef(null);
    const isInView = useInView(description, { once: true, amount: 0.5 });

    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                    {phrase.split(" ").map((word, index) => (
                        <span className={styles.mask} key={index}>
                            <motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"}>
                                {word}
                            </motion.span>
                        </span>
                    ))}
                </p>
                <motion.p
                    variants={fadeInSlideUp}
                    initial="initial"
                    animate={isInView ? "open" : "closed"}
                >
                    Passionate about XR and interactive design, I'm an international student with a computer science degree from the University of Indonesia, now pursuing UX Design at the University of Queensland. I blend expertise in UI/UX, 3D, and software development to bring innovative ideas to life.
                </motion.p>
            </div>
        </div>
    )
}