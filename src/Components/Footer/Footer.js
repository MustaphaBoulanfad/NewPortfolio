import React from "react";
import Container from "../../Layouts/Container/Container";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className={styles.footerContainer}>
          <div className={styles.content}>
            <h2>Available for select freelance opportunities</h2>
            <p>Have an exciting project you need help with?</p>
            <p>Send me an email or contact me via instant message!</p>
          </div>
          <div className={styles.links}>
            <h2>
              <a href="mailto:boulanfad.m01@gmail.com">
                boulanfad.m01@gmail.com
              </a>
              <span></span>
            </h2>
            <p>
              <a href="">Messenger</a>
              <a href="https://www.linkedin.com/in/mustapha-boulanfad/">
                LinkedIn
              </a>
              <a href="https://codepen.io/Mustapha-Boulanfad">CodePen</a>
              <a href="https://github.com/MustaphaBoulanfad">Github</a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
