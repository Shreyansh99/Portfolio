import React from "react";
import NavBar from "./compoents/NavBar";
import Home from "./compoents/Home";
import About from "./compoents/About";


function App() {
  return (
    <div className="app">
      <NavBar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
