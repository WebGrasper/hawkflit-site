import { useEffect, useState } from "react";
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const [isSeachChechBoxChecked, setSeachChechBoxChecked] = useState(false);
  const handleSearchCheckBox = () => {
    setSeachChechBoxChecked(!isSeachChechBoxChecked);
  };

  
  const [isMenuOpen, setMenuOpen] = useState(false); // New state for menu visibility
  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  //styling navbar link animation(starting)
  const pathname = usePathname();

  const [isAtHome, setAtHome] = useState(false);
  const [isAtProduct, setAtProduct] = useState(false);
  const [isAtServices, setAtServices] = useState(false);
  const [isAtPortfolio, setAtPortfolio] = useState(false);

  useEffect(() => {
    if (pathname == '/') {
      setAtHome(true);
    } else {
      setAtHome(false);
    }

    if (pathname == '/product') {
      setAtProduct(true);
    } else {
      setAtProduct(false);
    }

    if (pathname == '/services') {
      setAtServices(true);
    } else {
      setAtServices(false);
    }

    if (pathname == '/portfolio') {
      setAtPortfolio(true);
    } else {
      setAtPortfolio(false);
    }

  }, [pathname]);
  //styling navbar link animation(Ended)

  return (
    <div className={styles.navbarSupremeContainer}>
      <div>
        <nav className={`${styles.navbar}`}>
          <div className={`${styles.container1}`}>
            <Link href={"/"}>
              <div className={styles.container1H1}>
                <img src="/el.png" alt="Silverline logo" />
                <p>Hawk<span>flit</span></p>
              </div>
            </Link>
          </div>
          <div className={`${styles.containerButton}`}>
            <input type="checkbox" className={styles.checkBox} checked={isMenuOpen} onChange={() => setMenuOpen(!isMenuOpen)}/>
            <img
              className={styles.closeButton}
              src="/close.png"
              alt="close button"
            />
            <img
              className={styles.menuButton}
              src="/menu.png"
              alt="menu button"
            />
            <div className={styles.container3Navbar}>
              <Link
                className={`${styles.link} ${isAtHome ? styles.active : ""}`}
                href="/"
                passHref
                onClick={handleLinkClick}
              >
                <span>Home</span>
              </Link>
              <Link
                className={`${styles.link}`}
                href="#section3Container2"
                passHref
                onClick={handleLinkClick}
              >
                <span>Features</span>
              </Link>
              <Link
                className={`${styles.link}`}
                href="#section5"
                passHref
                onClick={handleLinkClick}
              >
                <span>Clients</span>
              </Link>
              <Link
                className={`${styles.link} ${isAtServices ? styles.active : ""}`}
                href="/services"
                passHref
                onClick={handleLinkClick}
              >
                <span>Services</span>
              </Link>
              <Link
                className={`${styles.link} ${isAtPortfolio ? styles.active : ""}`}
                href="/portfolio"
                passHref
                onClick={handleLinkClick}
              >
                <span>Portfolio</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;