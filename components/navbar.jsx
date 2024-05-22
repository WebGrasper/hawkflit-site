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
  const [isAtCoffeeTables, setAtCoffeeTables] = useState(false);
  const [isAtSideTables, setAtSideTables] = useState(false);
  const [isAtConsoleAndPillars, setAtConsoleAndPillars] = useState(false);

  useEffect(() => {
    if (pathname == '/') {
      setAtHome(true);
    } else {
      setAtHome(false);
    }

    if (pathname == '/products/coffee-tables') {
      setAtCoffeeTables(true);
    } else {
      setAtCoffeeTables(false);
    }

    if (pathname == '/products/side-tables') {
      setAtSideTables(true);
    } else {
      setAtSideTables(false);
    }

    if (pathname == '/products/console-and-pillars') {
      setAtConsoleAndPillars(true);
    } else {
      setAtConsoleAndPillars(false);
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
          <div className={`${styles.container2}`}>
            <form className={`${styles.container2Span}`} method="GET">
              <input
                type="search"
                className={styles.container2SearchBox}
                id="container2SearchBox"
                placeholder="Tables, Pillars & more..."
                onChange={(e) => {
                  handleSearchBlogs(e.target.value || null);
                }}
              />
            </form>
            <div className={`${styles.searchCheckBoxContainer}`}>
              <input
                type="checkbox"
                className={styles.searchCheckBox}
                onClick={handleSearchCheckBox}
              />
              <img
                className={styles.searchButton}
                src="/searchIcon.svg"
                alt="search icon"
              />
              <img
                className={styles.searchCloseButton}
                src="/closeButton.svg"
                alt="close button"
              />
            </div>
          </div>
          <div className={`${styles.containerButton}`}>
            <input type="checkbox" className={styles.checkBox} checked={isMenuOpen} onChange={() => setMenuOpen(!isMenuOpen)}/>
            <img
              className={styles.closeButton}
              src="/closeButton.svg"
              alt="close button"
            />
            <img
              className={styles.menuButton}
              src="/menuButton.svg"
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
                className={`${styles.link} ${isAtCoffeeTables ? styles.active : ""}`}
                href="/products/coffee-tables"
                passHref
                onClick={handleLinkClick}
              >
                <span>Features</span>
              </Link>
              <Link
                className={`${styles.link} ${isAtSideTables ? styles.active : ""}`}
                href="/products/side-tables"
                passHref
                onClick={handleLinkClick}
              >
                <span>Product</span>
              </Link>
              <Link
                className={`${styles.link} ${isAtConsoleAndPillars ? styles.active : ""}`}
                href="/products/console-and-pillars"
                passHref
                onClick={handleLinkClick}
              >
                <span>Portfolio</span>
              </Link>
              <Link
                className={`${styles.link} ${isAtConsoleAndPillars ? styles.active : ""}`}
                href="/about-us"
                passHref
                onClick={handleLinkClick}
              >
                <span>Clients</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <form
        className={`${styles.buttomSearchBarContainer} ${
          isSeachChechBoxChecked ? styles.show : ""
        }`}
        method="GET"
      >
        <input
          type="search"
          className={styles.buttomSearchBar}
          id="container2SearchBox"
          placeholder="Tables, Pillars & more..."
          onChange={(e) => {
            handleSearchBlogs(e.target.value || null);
          }}
        />
      </form>
    </div>
  );
}

export default Navbar;