import React from "react";
import Collections from "../components/home sections/Collections";
import ProductCarousell from "../components/home sections/ProductCarousell";
import Slider from "../components/slider/Slider";


function Home() {


  return (
    <div>
      <Slider />
      <Collections />
      <ProductCarousell />
    </div>
  );
}

export default Home;
