import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Roadmap from "../components/Roadmap";
import Category from "../components/Category";
import Feature from "../components/Feature";
import Companies from "../components/Companies";
import Testimoni from "../components/Testimoni";
import Become from "../components/Become";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <Main/>
      <Roadmap/>
      <Category/>
      <Feature/>
      <Companies/>
      <Testimoni/>
      <Become/>
      <Footer/>
    </>
  );
};

export default Home;
