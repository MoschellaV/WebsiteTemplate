import styles from "../../styles/AnimatedArrow.module.css";
import Image from "next/image";

const AnimatedArrow = () => {
    return (
        <div className={styles.arrowContainer}>
            <Image className={styles.arrow} fill src="/images/arrow.svg" alt="bobbing arrow" />
        </div>
    );
};
export default AnimatedArrow;
