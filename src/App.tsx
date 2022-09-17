import React from "react";
import Home from "./components/home/home";
import "./App.css";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="App">
      <Nav/>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
