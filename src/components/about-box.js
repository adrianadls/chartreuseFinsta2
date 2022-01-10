import React, { Component } from "react";
import pic from "./images/takota.png";
import "./css/picture-box.css";

const AboutBox = () => {
  return (
    <div class="col-7 offset-1 about-box">
      <ul class="list-group">
        <p class="list-group-item heading">About</p>
        <p class="list-group-item">Age: 417</p>
        <p class="list-group-item">Occupation: Color</p>
        <p class="list-group-item">Education: Wild Cat Academy</p>
        <p class="list-group-item">
          Favorite Bands: Cat Stevens, Def Leopard, Atomic Kitten, Lionel
          Ritchie
        </p>
        <p class="list-group-item">
          Contact Info: Meow at me at the fence behind Burger King on 242nd and
          Broadway
        </p>
        <p class="list-group-item">Relationship Status: Single</p>
        <p class="list-group-item">Places Lived: the World</p>
      </ul>
    </div>
  );
};

export default AboutBox;
