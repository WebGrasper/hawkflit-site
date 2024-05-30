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
              <p>
                Software development firm Hawkflit is presently working on a
                cross-platform mobile application suitable for different
                sectors of businesses. In addition to offering services like
                UI/UX design, social media management, and custom software
                development, we offer a broad range of software solutions,
                including web and mobile development.
              </p>
            </div>
            <div className={styles.footerContainer2}>
              <h4>Services</h4>
              <p>Web development</p>
              <p>User interface design</p>
              <p>Custom software development</p>
              <p>Mobile app development</p>
              <p>Social media handling</p>
            </div>
            <div className={styles.footerContainer3}>
              <h4>Community</h4>
              <Link href={"/contact-us"}>Contact us</Link>
              <Link href={"terms-and-conditions"}>terms and conditions</Link>
              <Link href={"/team"}>Team</Link>
            </div>
          </div>
          <hr />
          <div className={styles.copyWriteContainer}>
            <p>2023 Hawkflit. All Rights Reserved.</p>
            <div className={styles.socialIconContainer}>
              <Link href={"#"}>
                <img src="/facebook.svg" alt="" />
              </Link>
              <Link href={"#"}>
                <img src="/instagram.svg" alt="" />
              </Link>
              <Link href={"#"}>
                <img src="/linkedin.svg" alt="" />
              </Link>
              <Link href={"#"}>
                <img src="/twitter.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
