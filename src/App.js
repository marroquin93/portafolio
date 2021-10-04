import React, { useState, useEffect } from "react";
import "./App.css";
import Cover from "./compoments/cover/Cover";
import Navbar from "./compoments/navbar/Navbar";
import About from "./compoments/about/About";
import Slider from "./compoments/slider/Slider";
import Information from "./compoments/information/Information";
import Footer from "./compoments/footer/Footer";
import Curriculum from "./compoments/footer/Curriculum";

function App() {
  const [scrollHeight, setscrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setscrollHeight(position);
  }

  useEffect(() => {

    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight])

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
      <Cover />
      <About />
      <Slider />
      <Information />
      <Footer />
      {/* <Footer exact pach="/Curriculum" compoment={Curriculum} /> */}
      
    </div>
  );
}

export default App;
