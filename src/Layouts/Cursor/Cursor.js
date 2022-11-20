import React, { Fragment, useEffect } from "react";
import styles from "./Cursor.module.scss";

const Cursor = () => {
  useEffect(() => {
    const cursorIn = document.getElementById("cursorIn");
    const cursorOut = document.getElementById("cursorOut");
    document.addEventListener("mousemove", (event) => {
      let style = `left : ${event.clientX}px; top : ${event.clientY}px;`;
      cursorIn.style.cssText = style;
      cursorOut.style.cssText = style;
    });
  });

  return (
    <Fragment>
      <div id="cursorIn" className={styles.cursorIn}></div>
      <div id="cursorOut" className={styles.cursorOut}></div>
    </Fragment>
  );
};

export default Cursor;
