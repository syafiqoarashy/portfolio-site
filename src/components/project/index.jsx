import Image from "next/image";
import styles from './style.module.scss';
import Magnetic from "../magnetic"

export default function Project({ title, description, techStack, imageSrc }) {
    return (
        <div className={styles.project}>
            <div className={styles.container}>
                <div className={styles.contents}>
                    <div className={styles.texts}>
                        <div className={styles.header}>{title}</div>
                        <div className={styles.body}>{description}</div>
                        <div className={styles.skills}>{techStack}</div>
                    </div>
                    <div className={styles.thumbnail}>
                        <Magnetic dragLimit={50}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={imageSrc}
                                    alt={title}
                                    width={640}
                                    height={480}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                        </Magnetic>
                    </div>
                </div>
                <div className={styles.divide}></div>
            </div>
        </div>
    )
}