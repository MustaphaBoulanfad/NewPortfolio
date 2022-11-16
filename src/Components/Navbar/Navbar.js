import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleNavMobile } from "../../Store/PortfolioSlice";
import styles from "./Navbar.module.scss";
import { BiX } from "react-icons/bi";

const Navbar = () => {
  const showNav = useSelector((state) => state.showNavMobile);
  const dispatch = useDispatch();
  return (
    <div className={`${styles.navContainer} ${showNav ? styles.show : null}`}>
      <BiX onClick={() => dispatch(toggleNavMobile())} />
      <nav>
        <li>//Home</li>
        <li>//Expertise</li>
        <li>//Work</li>
        <li>//Experience</li>
        <li>//Contact</li>
      </nav>
      <div className={styles.copyRight}>
        <p>&copy;,Made with Love by Mustapha Bou.</p>
        <p>All right reserved.</p>
      </div>
    </div>
  );
};

export default Navbar;
