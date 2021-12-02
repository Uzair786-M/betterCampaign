import React from "react";
import Header from "../Header/Header";
import Home from "./Home";
import CardSection from "./CardSection";
import Campagne from "./Campagne";
import Footer from "../Footer/Footer";
const MainPage = () => {
  return (
    <div>
      <Header />
      <Home />
      <CardSection />
      <Campagne />
      <Footer />
    </div>
  );
};
export default MainPage;
