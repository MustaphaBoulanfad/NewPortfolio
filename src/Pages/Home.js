import React, { Fragment } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Cursor from "../Layouts/Cursor/Cursor";
import Expertise from "../Components/Expertise/Expertise";
import { useDispatch } from "react-redux";
import { changeScroll } from "../Store/PortfolioSlice";

const Home = () => {
  const dispatch = useDispatch();

  window.addEventListener("scroll", () => {
    dispatch(changeScroll(window.scrollY));
  });

  return (
    <Fragment>
      {window.innerWidth > 840 ? <Cursor /> : null}
      <Header />
      <Expertise />
      <Footer />
    </Fragment>
  );
};

export default Home;
