import React, { Component } from "react";
import PetNav from "./components/pet-nav";
import PictureBox from "./components/picture-box";
import AboutBox from "./components/about-box";
import Followers from "./components/followers1";

import "./App.css";

const App = () => {
  const component = new React.Component();

  component.render = () => {
    return (
      <div className="App">
        <PetNav />
        <div class="container">
          <div class="row">
            <PictureBox /> <AboutBox />
          </div>
          <Followers />
        </div>
      </div>
    );
  };

  return component;
};

export default App;
