import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import Cursor from "../Layouts/Cursor/Cursor";
import ShowProject from "../Components/ShowProject/ShowProject";
import { changeScroll } from "../Store/PortfolioSlice";

const Project = () => {
  const dispatch = useDispatch();

  // To Prevent the page get in the old scroll from showProject
  useEffect(() => {
    dispatch(changeScroll(0));
    window.scrollTo({ top: 0 });
  });

  window.addEventListener("scroll", () => {
    dispatch(changeScroll(window.scrollY));
  });

  return (
    <Fragment>
      {window.innerWidth > 840 ? <Cursor /> : null}
      <ShowProject />
    </Fragment>
  );
};

export default Project;
