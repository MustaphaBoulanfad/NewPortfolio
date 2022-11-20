import React from "react";
import styles from "./ShowProject.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeScroll } from "../../Store/PortfolioSlice";
import Container from "../../Layouts/Container/Container";
import Navbar from "../Navbar/Navbar";
import { BiMenu } from "react-icons/bi";
import { toggleNavMobile } from "../../Store/PortfolioSlice";
import {
  BsChevronRight,
  BsArrowRightShort,
  BsArrowLeft,
  BsArrowUp,
} from "react-icons/bs";

const ShowProject = () => {
  const dispatch = useDispatch();
  const prjts = useSelector((state) => state.projects);
  const scrollDown = useSelector((state) => state.scrollDown);
  const { state } = useLocation();
  const project = prjts.filter((element) => element.id === state.id)[0];

  const scrollMeduim = () => {
    if (scrollDown > 500 && window.innerWidth < 840) {
      return true;
    }
    return false;
  };

  return (
    <div className={styles.project}>
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

        <div className={styles.projectContainer}>
          <div className={styles.header}>
            <p className={styles.category}>{project.category}</p>
            <h1>{project.name}</h1>
            <nav>
              <li>
                <Link to="/">Home</Link>
                <BsChevronRight />
              </li>
              <li>
                <Link to="/#work">Work</Link>
                <BsChevronRight />
              </li>
              <li>
                <Link to="">{project.name}</Link>
              </li>
            </nav>
            <div className={styles.content}>
              <p className={styles.description}>{project.description}</p>
              <div>
                <div className={styles.clientInfo}>
                  <div>
                    <h4>Client</h4>
                    <p>{project.client}</p>
                  </div>
                  <div>
                    <h4>Technologies</h4>
                    <p>{project.technologies.join(", ")}</p>
                  </div>
                </div>
                <a href={`${project.link}`}>
                  Open Project <BsArrowRightShort />
                </a>
              </div>
            </div>
            {project.images.map((element, id) => {
              return (
                <img key={id} src={`${element}`} alt="project screenshot" />
              );
            })}
          </div>
        </div>
        <div className={styles.copyRight}>
          <p>&copy;,Made with Love by Mustapha Bou.</p>
        </div>

        <Link to="/" className={styles.backLink}>
          <BsArrowLeft />
          <p>Back</p>
        </Link>

        {scrollDown > 1000 && (
          <div
            className={styles.scrollTop}
            onClick={() => {
              dispatch(changeScroll(0));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <BsArrowUp />
          </div>
        )}
      </Container>
    </div>
  );
};

export default ShowProject;
