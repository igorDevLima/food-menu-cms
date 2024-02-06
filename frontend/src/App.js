import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import About from "./components/About";
import OpenHours from "./components/OpenHours";
import Product from "./components/Product";
import Cta from "./components/Cta";
import Faq from "./components/Faq";
import ContactUs from "./components/ContactUs";

import "./App.css";
import { useEffect } from "react";
import useStrapi from "./hooks/useStrapi";

function App() {
  const { strapiData } = useStrapi({
    route: "color",
    populate: "populate=*",
  });

  useEffect(() => {
    const root = document.documentElement;

    strapiData?.primary &&
      root.style.setProperty("--primary", strapiData?.primary);

    strapiData?.secondary &&
      root.style.setProperty("--secondary", strapiData?.secondary);

    strapiData?.background &&
      root.style.setProperty("--background", strapiData?.background);

    strapiData?.sectionBackground &&
      root.style.setProperty(
        "--section-background",
        strapiData?.sectionBackground
      );

    strapiData?.text && root.style.setProperty("--text", strapiData?.text);

    strapiData?.heading &&
      root.style.setProperty("--heading", strapiData?.heading);
      
  }, [strapiData]);

  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <OpenHours />
      <Product />
      <Cta />
      <Faq />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
