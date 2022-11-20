import React from "react";
import styles from "./Projects.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Projects = () => {
  const prjts = useSelector((state) => state.projects);

  const projects = prjts.map((element) => {
    return (
      <Link
        to={`projects/${element.id}`}
        key={element.id}
        state={{ id: element.id }}
      >
        <div className={styles.project}>
          <div className={styles.prjImage}>
            <img src={element.headerImage} alt="project" />
          </div>
          <div className={styles.prjInfo}>
            <h3>{element.name}</h3>
            <div className={styles.categoryHolder}>
              <p className={styles.category}>{element.category}</p>
              <p className={styles.showPrj}>Show Project</p>
            </div>
          </div>
        </div>
      </Link>
    );
  });

  return <div className={styles.projectsContainer}>{projects}</div>;
};

export default Projects;
