import React from "react";
import { useSelector } from "react-redux";
import styles from "./ExpretiseItem.module.scss";
import { GrReactjs } from "react-icons/gr";
import { SlScreenDesktop } from "react-icons/sl";

const ExpretiseItem = () => {
  const expretises = useSelector((state) => state.expretises);

  const items = expretises.map((element) => {
    const icon = element.icon === "react" ? <GrReactjs /> : <SlScreenDesktop />;
    return (
      <div className={styles.item} key={element.id}>
        <div>
          {icon}
          <h2>
            <span>{element.name}</span>
            <span className={styles.line}></span>
          </h2>
        </div>
        <p>{element.description}</p>
      </div>
    );
  });

  return items;
};

export default ExpretiseItem;
