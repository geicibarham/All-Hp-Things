import React from "react";
import Home from "./components/home/home";
import "./App.css";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Characters from "./components/characters/characters";
import RenderCharacter from "./components/rendercharacters/RenderCh";

function App() {

  return (
<>
    <Router>
      <Nav />
      <Routes>
        <Route path="/Riddikulus" element={<Home />} />

        <Route path="/characters" element={<RenderCharacter />} />
      </Routes>
    </Router>

</>
  );
}

export default App;
