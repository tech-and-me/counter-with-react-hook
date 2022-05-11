import { React, useState, createContext, useReducer } from "react";
import { Button } from "react-bootstrap";
import SectionA from "./components/SectionA";
import SectionB from "./components/SectionB";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Hooks from "./components/Hooks";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/hook" element={<Hooks />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
