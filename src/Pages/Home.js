import React, { Fragment, useEffect } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Cursor from "../Layouts/Cursor/Cursor";
import Expertise from "../Components/Expertise/Expertise";
import { useDispatch } from "react-redux";
import { changeScroll } from "../Store/PortfolioSlice";
import Work from "../Components/Work/Work";
import Experience from "../Components/Experience/Experience";

const Home = () => {
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
      <Header />
      <Expertise />
      <Work />
      <Experience />
      <Footer />
    </Fragment>
  );
};

export default Home;
