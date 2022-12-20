import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleNavMobile } from "../../Store/PortfolioSlice";
import styles from "./Header.module.scss";
import Container from "../../Layouts/Container/Container";
import Navbar from "../Navbar/Navbar";
import { BiMenu, BiDownArrowAlt } from "react-icons/bi";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const scrollDown = useSelector((state) => state.scrollDown);
  const dispatch = useDispatch();

  const scrollMeduim = () => {
    if (scrollDown > 500 && window.innerWidth < 840) {
      return true;
    }
    return false;
  };

  return (
    <header id="header">
      <div className={styles.overlay}></div>
      <Container>
        <div className={styles.navContainer}>
          <div
            className={`${styles.menu} ${scrollMeduim() ? styles.fixed : ""}`}
          >
            <BiMenu onClick={() => dispatch(toggleNavMobile())} />
            <div className={styles.logo}>
              <p>MustaphaBou</p>
              <span>
                .<span>_</span>
              </span>
            </div>
          </div>
          <Navbar />
        </div>
        <div className={styles.headerContainer}>
          <h1>Mustapha Boulanfad</h1>
          <p>Software Engineer, Front end Developer.</p>
        </div>
        <Link smooth to="/#expertise" className={styles.scrollIcon}>
          <BiDownArrowAlt />
        </Link>
      </Container>
    </header>
  );
};

export default Header;
