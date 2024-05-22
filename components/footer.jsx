import styles from "../styles/footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className={styles.root}>
        <div className={styles.mainContainer}>
          <div className={styles.footerContainer}>
            <div className={styles.footerContainer1}>
              <div className={styles.container1H1}>
                <img src="/el.png" alt="Silverline logo" />
                <p>
                  Hawk<span>flit</span>
                </p>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusamus quaerat commodi </p>
            </div>
            <div className={styles.footerContainer2}>
                <h4>Useful links</h4>
                <Link href={'#'}>Features</Link>
                <Link href={'#'}>Products</Link>
                <Link href={'#'}>Portfolio</Link>
                <Link href={'#'}>Clients</Link>
            </div>
            <div className={styles.footerContainer3}>
            <h4>Community</h4>
                <Link href={'#'}>Contact us</Link>
                <Link href={'#'}>terms and conditions</Link>
                <Link href={'#'}>Team</Link>
            </div>
          </div>
          <hr />
          <div className={styles.copyWriteContainer}>
            <p>2023 Hawkflit. All Rights Reserved.</p>
            <div className={styles.socialIconContainer}>
              <Link href={'#'}><img src="/facebook.svg" alt="" /></Link>
              <Link href={'#'}><img src="/instagram.svg" alt="" /></Link>
              <Link href={'#'}><img src="/linkedin.svg" alt="" /></Link>
              <Link href={'#'}><img src="/twitter.svg" alt="" /></Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
