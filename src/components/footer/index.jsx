import styles from './style.module.scss';

export default function index() {
    return (
        <div className={styles.footer}>
            <div className={styles.header}>
                Let's shape the future together!
            </div>
            <div className={styles.divide}></div>
            <div className={styles.contact}>
                    syafiqoarashy@gmail.com
            </div>
        </div>
    )
}