import React from "react";
import styles from "./Expertise.module.scss";
import Container from "../../Layouts/Container/Container";
import ExpretiseItem from "./ExpretiseItem/ExpretiseItem";

const Expertise = () => {
  return (
    <section id="expertise" className={styles.expertise}>
      <Container>
        <div className={styles.expertiseContainer}>
          <h1>My Expertise</h1>
          <div className={styles.expertises}>
            <ExpretiseItem />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Expertise;
