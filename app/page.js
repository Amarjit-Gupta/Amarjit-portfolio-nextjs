"use client"
import { useEffect, useState } from "react";
import About from "./About.jsx/page";
import Contact from "./Contact/page";
import Footer from "./Footer/page";
import Header from "./Header/page";
import Home from "./Home/page";
import Project from "./Project/page";
import Skills from "./Skills/page";

const App = () => {

  const [loader, setLoader] = useState(true);

  const [main, setMain] = useState(false);

  useEffect(() => {
    const rawData = localStorage.getItem("react");
    if (rawData) {
      setMain(JSON.parse(rawData));
    }
  }, []);

  const handleMain = () => {
    setMain(!main);
  }

  useEffect(() => {
    localStorage.setItem("react", JSON.stringify(main));
  }, [main]);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2500);
  }, []);

  return (
    <div className={` ${main ? "dark" : "p1"}`}>
      {loader ? <div className="loader"><img src="/loader.gif" alt="Loading..." /></div> : ""}
      <Header handleMain={handleMain} main={main} />
      <Home />
      <About />
      <Skills />
      <Project main={main} />
      <Contact />
      <Footer main={main} />
    </div>
  );
};
export default App;