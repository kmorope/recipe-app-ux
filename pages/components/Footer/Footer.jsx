import Image from "next/image";
import styles from "./Footer.module.scss";
import logo from "../../../public/assets/Footer.png";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__items}>
          <span className={styles.footer__partner}>Con el Patrocinio de</span>
          <Image
            className={styles.footer__logo}
            src={logo}
            alt="Con el Patrocinio de"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
