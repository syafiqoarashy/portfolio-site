'use client';
import styles from './style.module.scss';
import Image from "next/image";

export default function index({ title, description, techStack, imageSrc }) {
    return (
        <div className={styles.project}>
            <div className={styles.container}>
                <div className={styles.divider}>
                    <div className={styles.contents}>
                        <div className={styles.texts}>
                            <div className={styles.headerAndBody}>
                                <div className={styles.header}>{title}</div>
                                <div className={styles.body}>{description}</div>
                            </div>
                            <div className={styles.skills}>{techStack}</div>
                        </div>
                        <div className={styles.thumbnail}>
                            <Image
                                width={550}
                                height={364}
                                src={imageSrc}
                                alt="image"
                            />
                        </div>
                    </div>
                    <div className={styles.divide}></div>
                </div>
            </div>
        </div>
    )
}