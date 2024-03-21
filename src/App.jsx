import React from "react";
import Navbar from "./Components/Navbar";
import Work from "./Components/Work";
import Stripes from "./Components/Stripes";
import Products from "./Components/Products";
import Marquess from "./Components/Marquess";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import LocomotiveScroll from 'locomotive-scroll';



const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
      <div className="w-full min-h-screen bg-zinc-900 ">
        <Navbar />
        <Work/>
        <Stripes/>
        <Products/>
        <Marquess/>
        <Cards/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
