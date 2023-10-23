import React from "react";
import Header from "../components/Layout/Header";
import Hero from "../components/Layout/Hero";
import Categories from "../components/Categories/Categoties";
import BestDeals from "../components/BestDeals/BestDeals";
import FeaturedProduct from "../components/FeaturedProduct/FeaturedProduct";
import Event from "../components/Events/Event";
import Sponsored from "../components/Sponsored/Sponsored";
import Footer from "../components/Layout/Footer";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <Event />
      <FeaturedProduct />
      <Sponsored />
      <Footer />
    </div>
  );
};

export default HomePage;
