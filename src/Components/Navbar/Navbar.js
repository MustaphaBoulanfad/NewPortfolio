import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleNavMobile } from "../../Store/PortfolioSlice";
import styles from "./Navbar.module.scss";
import { BiX } from "react-icons/bi";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const showNav = useSelector((state) => state.showNavMobile);
  const scrollDown = useSelector((state) => state.scrollDown);
  const dispatch = useDispatch();

  const scrollMeduim = () => {
    if (scrollDown > 500 && window.innerWidth > 840) {
      return true;
    }
    return false;
  };

  return (
    <div
      className={`${styles.navContainer} ${showNav ? styles.show : ""} ${
        scrollMeduim() ? styles.fixed : ""
      }`}
    >
      <BiX onClick={() => dispatch(toggleNavMobile())} />
      <nav>
        <li>
          <Link smooth to="/#">
            &#47;&#47;Home
          </Link>
        </li>
        <li>
          <Link smooth to="/#expertise">
            &#47;&#47;Expertise
          </Link>
        </li>
        <li>
          <Link smooth to="/#work">
            &#47;&#47;Work
          </Link>
        </li>
        <li>
          <Link smooth to="/#experience">
            &#47;&#47;Experience
          </Link>
        </li>
        <li>
          <Link smooth to="/#contact">
            &#47;&#47;Contact
          </Link>
        </li>
      </nav>
      <div className={styles.copyRight}>
        <p>&copy;,Made with Love by Mustapha Bou.</p>
        <p>All right reserved.</p>
      </div>
    </div>
  );
};

export default Navbar;
