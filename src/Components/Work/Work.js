import React from "react";
import styles from "./Work.module.scss";
import Container from "../../Layouts/Container/Container";
import Projects from "./Projects/Projects";

const Work = () => {
  return (
    <section className={styles.work} id="work">
      <Container>
        <div className={styles.workContainer}>
          <h1>My Work</h1>

          <div className={styles.projects}>
            <Projects />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Work;
