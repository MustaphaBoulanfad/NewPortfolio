import { configureStore } from "@reduxjs/toolkit";
import portfolio from "./PortfolioSlice";

export default configureStore({ reducer: portfolio });
