import React from "react";
import Header from "../components/Header";
import Collections from "../components/home sections/Collections";
import ProductCarousell from "../components/home sections/ProductCarousell";
import Slider from "../components/slider/Slider";


function Home() {


  return (
    <div>
      <Header />
      <Slider />
      <Collections />
      <ProductCarousell />
    </div>
  );
}

export default Home;
