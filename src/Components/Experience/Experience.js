import React from "react";
import styles from "./Experience.module.scss";
import Container from "../../Layouts/Container/Container";
import { BsPlus, BsDash, BsLink45Deg } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

const Experience = () => {
  const exps = useSelector((state) => state.experiences);

  const toggleDetails = (event, id) => {
    let details = document.getElementById(`details-${id}`);
    let hidebtn = document.getElementById(`hideBtn-${id}`);
    let showBtn = document.getElementById(`showBtn-${id}`);

    event.target.id === `showBtn-${id}`
      ? (details.style.height = `${details.scrollHeight}px`)
      : (details.style.height = 0);

    hidebtn.classList.toggle(styles.hide);
    showBtn.classList.toggle(styles.hide);
  };

  const experiences = exps.map((element) => {
    return (
      <div className={styles.experience} key={element.id}>
        <div className={styles.experienceHeader}>
          <p className={styles.post}>
            {element.post} @ {element.company}
          </p>
          <div>
            <p className={styles.date}>
              {element.date.from} - {element.date.to}
            </p>
            <div className={styles.icon}>
              <BsPlus
                id={`showBtn-${element.id}`}
                className={styles.hide}
                onClick={(event) => toggleDetails(event, element.id)}
              />

              <BsDash
                id={`hideBtn-${element.id}`}
                onClick={(event) => toggleDetails(event, element.id)}
              />
            </div>
          </div>
        </div>
        <div id={`details-${element.id}`} className={styles.details}>
          <div className={styles.detailsContainer}>
            <div className={styles.logo}>
              <img
                className={styles.theLogo}
                src={element.logo}
                alt="the logo of the company"
              />
            </div>
            <div className={styles.content}>
              <div className={styles.companyDetails}>
                <p>
                  <FaMapMarkerAlt /> {element.location}
                </p>
                <a href={element.website}>
                  <BsLink45Deg /> {element.website}
                </a>
              </div>
              <p>{element.description}</p>
              <div className={styles.technologies}>
                {element.technologies.map((tech, id) => {
                  return <p key={id}>{tech}</p>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className={styles.experience} id="experience">
      <Container>
        <h1>Professional Experiences</h1>
        <div className={styles.experienceContainer}>
          <div className={styles.hiring}>
            <p>&#47;&#47;Open To Work! </p>
          </div>
          {experiences}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
