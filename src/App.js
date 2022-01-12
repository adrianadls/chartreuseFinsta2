import React, { Component } from "react";
import PetNav from "./components/pet-nav";
import PictureBox from "./components/picture-box";
import AboutBox from "./components/about-box";
import Followers from "./components/followers.js";

import "./App.css";

const App = () => {
  const component = new React.Component();

  component.render = () => {
    return (
      <div className="App">
        <PetNav />
        <div class="container">
          <div class="row">
            <PictureBox />
            <AboutBox />
          </div>
          <div class="row"></div>
        </div>
      </div>
    );
  };
 
  handleFollowerButton = () => {
    this.setState((state) => {
      state.followers += 1;
      return state;
    });
  };

  render() {
    return(
    <div className = "App">
      <div className ="followers"

    < Followers
            id={0}
            clickHandler={this.handleFollowerButton}

          />
    </div>
< /div>

  )}


};

export default App;
