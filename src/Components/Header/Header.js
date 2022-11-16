import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleNavMobile } from "../../Store/PortfolioSlice";
import styles from "./Header.module.scss";
import Container from "../../Layouts/Container/Container";
import Navbar from "../Navbar/Navbar";
import { BiMenu, BiDownArrowAlt } from "react-icons/bi";

const Header = () => {
  const showNav = useSelector((state) => state.showNavMobile);
  const dispatch = useDispatch();
  return (
    <header>
      <Container>
        <div className={styles.navContainer}>
          <div className={styles.menu}>
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
          <h1>Mustapha Bou</h1>
          <p>Software Engineer, Front end Developer.</p>
        </div>
        <div className={styles.scrollIcon}>
          <BiDownArrowAlt />
        </div>
      </Container>
    </header>
  );
};

export default Header;
