import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showNavMobile: false,
  scrollDown: 0,
  expretises: [
    {
      id: 1,
      icon: "software",
      name: "Software Development",
      description:
        "Experienced in both functional and OOP: JavaScript, TypeScript.",
    },
    {
      id: 2,
      icon: "react",
      name: "Frontend Dev ReactJS",
      description:
        "Passionate about UI/UX. Over 3 years of development experience in HTML, CSS, JS, ReactJS framework.",
    },
  ],
  projects: [
    {
      id: 1,
      name: "Dento",
      description:
        "Dento is a dental care website template, a near-complete solution to get your clinic online as fast as possible. Dento contains 7 diferent pages for services, pricing, contact, and also a blogs page and a page to read the blog.",
      headerImage: "https://iili.io/Hxlp0cx.png",
      category: "Web Development",
      client: "My self",
      technologies: ["Html", "Sass", "ReactJS"],
      link: "https://mustaphaboulanfad.github.io/Dento/",
      images: ["https://iili.io/Hx00riB.png"],
    },
    {
      id: 2,
      name: "Gabooo",
      description:
        "Gabooo is a Template for fashion stores and other eCommerce websites. This clean, straightforward layout puts the site's content in the focus of attention.",
      headerImage: "https://iili.io/H9yLGAN.png",
      category: "Web Development",
      client: "My self",
      technologies: ["Html", "Sass", "ReactJS"],
      link: "https://mustaphaboulanfad.github.io/Gabooo-template/",
      images: ["https://iili.io/HHFR3Sp.png"],
    },
    {
      id: 3,
      name: "Ashion",
      description:
        "Ashion is a Template for fashion stores and other eCommerce websites. This clean, straightforward layout puts the site's content in the focus of attention.",
      headerImage: "https://iili.io/HH94Ta2.png",
      category: "Web Development",
      client: "My self",
      technologies: ["Html", "Sass", "Javascript"],
      link: "https://mustaphaboulanfad.github.io/Ashion-Template/",
      images: ["https://iili.io/HH9PqqG.png"],
    },
    {
      id: 4,
      name: "LAGABIA",
      description:
        "LAGABIA is a full restaurant website with 11 pages (Home, Menu, Gallery, Shop, Contact...), give users the possibility to discover the restaurant and get crave just with drilling in the pages",
      headerImage: "https://iili.io/HH9im9p.png",
      category: "Web Development",
      client: "My self",
      technologies: ["Html", "Css", "Javascript"],
      link: "https://mustaphaboulanfad.github.io/LAGABIA/home.html",
      images: ["https://iili.io/HHFuC7I.png"],
    },
    {
      id: 5,
      name: "Sparkle",
      description:
        "Sparkle is a template for single page agency style, modern and clean, with a simple design that puts the site's content in the focus of attention.",
      headerImage: "https://iili.io/HH9bm11.png",
      category: "Web Development",
      client: "My self",
      technologies: ["Html", "Css"],
      link: "https://mustaphaboulanfad.github.io/Sparkle-template/",
      images: ["https://iili.io/HHFAdy7.png"],
    },
    {
      id: 6,
      name: "Doob",
      description:
        "Doob is a template for single page agency style, modern and clean, with a simple design that puts the site's content in the focus of attention.",
      headerImage: "https://iili.io/HHH9H7e.png",
      category: "Web Development",
      client: "My self",
      technologies: ["Html", "Css"],
      link: "https://mustaphaboulanfad.github.io/Doob-template/",
      images: ["https://iili.io/HHFT5R1.png"],
    },
    {
      id: 7,
      name: "My Old Portfolio",
      description:
        "Modern and colorfull portfolio, with animation and compatible with all devices.",
      headerImage: "https://iili.io/HHo2BOg.png",
      category: "Web Development",
      client: "My self",
      technologies: ["Html", "Css", "Javascript"],
      link: "https://mustaphaboulanfad.github.io/Portfolio/index.html#home",
      images: ["https://iili.io/HHoK6k7.png"],
    },
  ],
  experiences: [
    {
      id: 1,
      post: "Intern Web Developper",
      description:
        "Developing the front of a web application for the management of a company invoices with html, Css and Javascript.",
      company: "WebKeck",
      date: {
        from: 2019,
        to: 2020,
      },
      location: "Marrakech, Morocco",
      website: "https://webkech.com/",
      logo: "https://iili.io/HJWpBat.jpg",
      technologies: ["Html", "Css", "Javascript"],
    },
  ],
};
const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    toggleNavMobile: (state) => {
      state.showNavMobile = !state.showNavMobile;
    },
    changeScroll: (state, action) => {
      state.scrollDown = action.payload;
    },
  },
});

export const { toggleNavMobile, changeScroll } = portfolioSlice.actions;
export default portfolioSlice.reducer;
