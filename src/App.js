import React from "react";
import "./App.css";
import Header from "./components/Header";
import Calculator from "./components/Pages/Calculator";
import { Route , Routes } from "react-router-dom";
import About from "./components/Pages/About";
import Links from "./components/Pages/Links";
import Author from "./components/Pages/Author";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/bmi-calculator" element={<Calculator />} />
        <Route path="/about" element={<About />} />
        <Route path="/links" element={<Links />}/>
        <Route path="/author" element={<Author />}/>
      </Routes>
    </div>
  );
};

export default App;
