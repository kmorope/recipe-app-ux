import Image from "next/image";
import styles from "./Hero.module.scss";
const Hero = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.heroText}>
        <span className={styles.recipes}>Recetas</span>
        <span className={styles.all}>para todos</span>
      </div>
    </div>
  );
};

export default Hero;
